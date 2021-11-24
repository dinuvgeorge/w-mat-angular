import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WmatAltitudeTextboxComponent} from './wmat-altitude-textbox.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    WmatAltitudeTextboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    WmatAltitudeTextboxComponent
  ],
})
export class WmatAltitudeTextboxModule {
}
