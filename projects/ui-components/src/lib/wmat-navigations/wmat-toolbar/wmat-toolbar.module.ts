import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from "@angular/material/toolbar";

import {WmatToolbarComponent} from './wmat-toolbar.component';


@NgModule({
  declarations: [
    WmatToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    WmatToolbarComponent
  ]
})
export class WmatToolbarModule {
}
