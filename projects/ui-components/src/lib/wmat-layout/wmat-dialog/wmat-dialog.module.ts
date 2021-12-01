import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatDialogModule} from "@angular/material/dialog";

import {WmatDialogComponent} from './wmat-dialog/wmat-dialog.component';
import {WmatDialogServices} from "./wmat-dialog.services";

@NgModule({
  declarations: [
    WmatDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    WmatDialogServices
  ]
})
export class WmatDialogModule {
}
