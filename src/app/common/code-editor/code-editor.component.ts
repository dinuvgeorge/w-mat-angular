import {Component, Input, OnInit} from '@angular/core';
import {MonacoEditorConstructionOptions} from "@materia-ui/ngx-monaco-editor/lib/interfaces";

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  @Input()
  code = ''

  @Input()
  type: 'html' | 'typescript' = 'html';

  options: MonacoEditorConstructionOptions = {};

  ngOnInit(): void {
    this.options = {
      minimap: {enabled: false},
      readOnly: true,
      language: this.type,
      roundedSelection: true,
      autoIndent: 'full'
    }
  }
}
