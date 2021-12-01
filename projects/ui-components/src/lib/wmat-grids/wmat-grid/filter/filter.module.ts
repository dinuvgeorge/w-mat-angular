import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {WmatInputModule} from "../../../wmat-inputs/wmat-input/wmat-input.module";

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
    WmatInputModule
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule {
}
