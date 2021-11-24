import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {WmatTextboxModule} from "../../../wmat-inputs/wmat-textbox/wmat-textbox.module";

import {FilterComponent} from "./filter.component";
import {SimpleFilterComponent} from "./simple-filter/simple-filter.component";


@NgModule({
  declarations: [
    FilterComponent,
    SimpleFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WmatTextboxModule
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule {
}
