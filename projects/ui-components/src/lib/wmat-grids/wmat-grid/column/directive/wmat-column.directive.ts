import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: 'wmat-column'
})
export class WmatColumnDirective {

  @Input() field: string = '';
  @Input() headerText: string = '';
  @Input() width: string = '400px';

  @ContentChild('template')
  template: TemplateRef<any> | null = null;
}
