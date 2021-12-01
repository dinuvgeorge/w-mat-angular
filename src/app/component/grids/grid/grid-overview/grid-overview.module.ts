import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {WmatGridModule} from 'ui-components';
import {GridOverviewComponent} from './grid-overview.component';
import {MonacoEditorModule} from '@materia-ui/ngx-monaco-editor';
import {FormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";

const routes: Route[] = [
  {path: '', component: GridOverviewComponent}
];

@NgModule({
  declarations: [
    GridOverviewComponent
  ],
  exports: [
    GridOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WmatGridModule,
    RouterModule.forChild(routes),
    MonacoEditorModule,
    FlexModule
  ]
})
export class GridOverviewModule {
}
