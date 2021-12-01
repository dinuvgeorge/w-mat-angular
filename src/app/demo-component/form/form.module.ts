import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {WmatAltitudeTextboxModule, WmatTextboxModule} from 'ui-components';

import {FormComponent} from './form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WmatTextboxModule,
    WmatAltitudeTextboxModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule {
}
