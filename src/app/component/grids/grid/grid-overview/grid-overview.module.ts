import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {WmatGridModule} from 'ui-components';
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
    WmatGridModule,
    RouterModule.forChild(routes),
  ]
})
export class GridOverviewModule {
}
