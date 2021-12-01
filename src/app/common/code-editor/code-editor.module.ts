import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MonacoEditorModule} from "@materia-ui/ngx-monaco-editor";

import {CodeEditorComponent} from "./code-editor.component";


@NgModule({
  declarations: [CodeEditorComponent],
  imports: [
    CommonModule,
    MonacoEditorModule
  ],
  exports: [
    CodeEditorComponent
  ]
})
export class CodeEditorModule {
}
