import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {MatInputModule} from "@angular/material/input";

import {WmatInputComponent} from "./wmat-input.component";


@NgModule({
  declarations: [
    WmatInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    WmatInputComponent
  ]
})
export class WmatInputModule {
}
