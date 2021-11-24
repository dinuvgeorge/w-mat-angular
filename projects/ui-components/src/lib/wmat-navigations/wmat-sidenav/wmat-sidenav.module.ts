import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatSidenavModule} from "@angular/material/sidenav";

import {WmatSidenavComponent} from './wmat-sidenav.component';

@NgModule({
  declarations: [
    WmatSidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    WmatSidenavComponent
  ]
})
export class WmatSidenavModule {
}
