import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatTabsModule} from "@angular/material/tabs";

import {WmatTabGroupComponent} from './wmat-tab-group/wmat-tab-group.component';
import {WmatTabDirective} from './wmat-tab/wmat-tab.directive';

@NgModule({
  declarations: [
    WmatTabGroupComponent,
    WmatTabDirective
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    WmatTabGroupComponent,
    WmatTabDirective
  ]
})
export class WmatTabModule {
}
