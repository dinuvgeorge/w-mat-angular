import {ContentChildren, Directive, QueryList} from '@angular/core';

import {WmatColumnDirective} from './wmat-column.directive';

@Directive({
  selector: 'wmat-columns'
})
export class WmatColumnsDirective {

  @ContentChildren(WmatColumnDirective, {descendants: true})
  columns: QueryList<WmatColumnDirective> | undefined = undefined;

  getDisplayedColumns(): string[] | undefined {
    return this.columns?.map((column: WmatColumnDirective) => column.field)
  }
}
