import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from './grid.component';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [{
  path: '', component: GridComponent,
  children: [
    {path: '', redirectTo: 'overview'},
    {
      path: 'overview',
      loadChildren: () => import('./grid-overview/grid-overview.module').then(m => m.GridOverviewModule)
    },
    {
      path: 'columns',
      loadChildren: () => import('./grid-column/grid-column.module').then(m => m.GridColumnModule)
    }
  ]
}];

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    GridComponent
  ],
})
export class GridModule {
}
