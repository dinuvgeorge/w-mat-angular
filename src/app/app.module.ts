import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {WmatToolbarModule} from "ui-components";

const routes: Route[] = [
  {path: '', redirectTo: 'components', pathMatch: 'full'},
  {path: 'components', loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    WmatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
