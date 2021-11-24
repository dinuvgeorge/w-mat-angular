import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from "@angular/material/menu";

import {WmatContextmenuTriggerForDirective} from "./wmat-contextmenu-trigger-for.directive";
import {WmatContextmenuComponent} from "./wmat-contextmenu.component";
import {WmatContextmenuItemDirective} from "./wmat-contextmenu-item.directive";

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
  ],
  declarations: [
    WmatContextmenuComponent,
    WmatContextmenuItemDirective,
    WmatContextmenuTriggerForDirective
  ],
  exports: [
    WmatContextmenuComponent,
    WmatContextmenuItemDirective,
    WmatContextmenuTriggerForDirective
  ]
})
export class WmatContextmenuModule {
}
