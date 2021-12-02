import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatTabsModule} from "@angular/material/tabs";

import {WmatTabComponent} from './wmat-tab/wmat-tab.component';
import {WmatTabContentComponent} from './wmat-tab-content/wmat-tab-content.component';
import {WmatTabGroupComponent} from './wmat-tab-group/wmat-tab-group.component';
import {WmatTabHeaderComponent} from './wmat-tab-header/wmat-tab-header.component';

@NgModule({
  declarations: [
    WmatTabGroupComponent,
    WmatTabComponent,
    WmatTabContentComponent,
    WmatTabHeaderComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    WmatTabGroupComponent,
    WmatTabComponent,
    WmatTabContentComponent,
    WmatTabHeaderComponent
  ]
})
export class WmatTabModule {
}
