import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {};
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => WmatInputNumericComponent),
};

@Component({
  selector: 'wmat-input-numeric',
  templateUrl: './wmat-input-numeric.component.html',
  styleUrls: ['./wmat-input-numeric.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class WmatInputNumericComponent implements ControlValueAccessor {
  @ViewChild('input', { static: false }) input: ElementRef | undefined;

  @Input() disabled = false;
  @Input() useValue: 'cm' | 'm' | 'km' = 'm';
  @Input() showValue: 'cm' | 'm' | 'km' = 'km';

  onChangeCallback: (_: any) => void = noop;
  onTouchedCallback: () => void = noop;

  unit = 'KM';
  type = 'number';

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

  focusin($event: FocusEvent) {
    this.type = 'number';
    this.unit = 'Meters';
    const meters = this.value * 1000;
    this.writeValue(meters);

    setTimeout(() => {
      // this will make the execution after the above boolean has changed
      this.input?.nativeElement.select();
    }, 0);
  }

  focusout($event: FocusEvent) {
    this.type = 'string';
    this.unit = 'KM';
    const meters = this.value / 1000;
    this.writeValue(meters);
  }
}
