import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridColumnComponent} from "./grid-column.component";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {path: '', component: GridColumnComponent}
];

@NgModule({
  declarations: [GridColumnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    GridColumnComponent
  ]
})
export class GridColumnModule {
}
