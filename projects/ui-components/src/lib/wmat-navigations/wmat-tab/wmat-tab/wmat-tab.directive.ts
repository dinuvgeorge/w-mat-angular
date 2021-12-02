import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: 'wmat-tab'
})
export class WmatTabDirective {

  @Input() label = '';

  @ContentChild(TemplateRef)
  template: TemplateRef<any> | undefined;

}
