import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentComponent} from './component.component';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [{
  path: '', component: ComponentComponent,
  children: [
    {path: '', redirectTo: 'grid'},
    {path: 'grid', loadChildren: () => import('./grids/grid/grid.module').then(m => m.GridModule)},
    {path: 'textbox', loadChildren: () => import('./inputs/textbox/textbox.module').then(m => m.TextboxModule)},
    {
      path: 'altitude-textbox',
      loadChildren: () => import('./inputs/altitude-textbox/altitude-textbox.module').then(m => m.AltitudeTextboxModule)
    },
    {path: 'dialog', loadChildren: () => import('./layout/dialog/dialog.module').then(m => m.DialogModule)},
  ]
}];

@NgModule({
  declarations: [
    ComponentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ComponentComponent
  ]
})
export class ComponentModule {
}
