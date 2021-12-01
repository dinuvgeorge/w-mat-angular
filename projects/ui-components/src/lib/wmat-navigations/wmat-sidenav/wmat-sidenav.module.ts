import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WmatSidenavComponent} from './wmat-sidenav.component';

@NgModule({
  declarations: [
    WmatSidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WmatSidenavComponent
  ]
})
export class WmatSidenavModule {
}
