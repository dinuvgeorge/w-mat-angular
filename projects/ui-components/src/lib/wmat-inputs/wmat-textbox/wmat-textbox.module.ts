import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {MatInputModule} from "@angular/material/input";

import {WmatTextboxComponent} from "./wmat-textbox.component";


@NgModule({
  declarations: [
    WmatTextboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    WmatTextboxComponent
  ]
})
export class WmatTextboxModule {
}
