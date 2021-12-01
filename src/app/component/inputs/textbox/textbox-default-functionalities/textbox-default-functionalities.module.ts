import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {TextboxDefaultFunctionalitiesComponent} from "./textbox-default-functionalities.component";
import {WmatInputModule} from "ui-components";

const routes: Route[] = [
  {path: '', component: TextboxDefaultFunctionalitiesComponent}
];

@NgModule({
  declarations: [TextboxDefaultFunctionalitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WmatInputModule,
  ],
  exports: [
    TextboxDefaultFunctionalitiesComponent
  ]
})
export class TextboxDefaultFunctionalitiesModule {
}
