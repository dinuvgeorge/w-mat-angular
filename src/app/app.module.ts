import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {FlexModule} from "@angular/flex-layout";
import {Route, RouterModule} from "@angular/router";

import {MONACO_PATH} from '@materia-ui/ngx-monaco-editor';

import {AppComponent} from './app.component';
import {WmatToolbarModule} from "ui-components";
import {LandingComponent} from './landing/landing.component';
import {CodeEditorComponent} from './common/code-editor/code-editor.component';

const routes: Route[] = [
  {path: '', component: LandingComponent},
  {
    path: 'components',
    loadChildren: () => import('./demo-component/demo-component.module').then(m => m.DemoComponentModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexModule,
    RouterModule.forRoot(routes),
    WmatToolbarModule,
  ],
  providers: [
    {
      provide: MONACO_PATH,
      useValue: 'https://unpkg.com/monaco-editor@0.24.0/min/vs'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
