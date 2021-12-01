import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WmatButtonDirective} from './wmat-button.directive';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    WmatButtonDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    WmatButtonDirective
  ]
})
export class WmatButtonModule {
}
