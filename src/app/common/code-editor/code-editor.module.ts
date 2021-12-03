import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';

import { CodeEditorComponent } from './code-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CodeEditorComponent],
  imports: [CommonModule, FormsModule, MonacoEditorModule],
  exports: [CodeEditorComponent],
})
export class CodeEditorModule {}
