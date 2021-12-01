import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {Route, RouterModule} from "@angular/router";

import {WmatTabModule} from 'ui-components';
import {WmatGridModule} from 'ui-components';

import {CodeEditorModule} from "../../../../common/code-editor/code-editor.module";

import {GridOverviewComponent} from './grid-overview.component';


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
    FlexModule,
    RouterModule.forChild(routes),
    WmatGridModule,
    WmatTabModule,
    CodeEditorModule
  ]
})
export class GridOverviewModule {
}
