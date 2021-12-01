import {Component, ElementRef, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const noop = () => {
};
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => WmatInputComponent),
};

@Component({
  selector: 'wmat-input',
  templateUrl: './wmat-input.component.html',
  styleUrls: ['./wmat-input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class WmatInputComponent implements ControlValueAccessor {

  @ViewChild('input', {static: false}) input: ElementRef | undefined;

  @Input() disabled = false;

  onChangeCallback: (_: any) => void = noop;
  onTouchedCallback: () => void = noop;

  innerValue: string = '';

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.innerValue = obj;
  }

}
