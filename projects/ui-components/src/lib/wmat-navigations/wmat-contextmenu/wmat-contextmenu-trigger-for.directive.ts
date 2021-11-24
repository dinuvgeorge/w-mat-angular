import {Directive, Input, OnInit} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {WmatContextmenuComponent} from "./wmat-contextmenu.component";

@Directive({
  selector: `[wmatContextMenuTriggerFor]`,
  exportAs: 'wmatContextMenuTriggerFor'
})
export class WmatContextmenuTriggerForDirective extends MatMenuTrigger implements OnInit {

  @Input('wmatContextMenuTriggerFor')
  wmatContextMenuTriggerFor: WmatContextmenuComponent<any> | undefined;

  ngOnInit(): void {
    if (this.wmatContextMenuTriggerFor?.matMenu) {
      this.menu = this.wmatContextMenuTriggerFor.matMenu;
    }
  }
}
