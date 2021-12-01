import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatTabsModule} from "@angular/material/tabs";

import {WmatTabGroupComponent} from './wmat-tab-group/wmat-tab-group.component';
import {WmatTabComponent} from './wmat-tab/wmat-tab.component';

@NgModule({
  declarations: [
    WmatTabGroupComponent,
    WmatTabComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    WmatTabGroupComponent,
    WmatTabComponent
  ]
})
export class WmatTabModule {
}
