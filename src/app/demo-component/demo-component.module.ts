import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentComponent } from './demo-component.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: DemoComponentComponent,
    children: [
      { path: '', redirectTo: 'grid' },
      {
        path: 'grid',
        loadChildren: () =>
          import('./grids/grid/grid.module').then((m) => m.GridModule),
      },

      {
        path: 'button',
        loadChildren: () =>
          import('./buttons/button/button.module').then((m) => m.ButtonModule),
      },
      {
        path: 'input-numeric',
        loadChildren: () =>
          import('./inputs/input-numeric/input-numeric-textbox.module').then(
            (m) => m.InputNumericTextboxModule
          ),
      },
      {
        path: 'input-text',
        loadChildren: () =>
          import('./inputs/input-text/input-text.module').then(
            (m) => m.InputTextModule
          ),
      },
      {
        path: 'dialog',
        loadChildren: () =>
          import('./layout/dialog/dialog.module').then((m) => m.DialogModule),
      },
    ],
  },
];

@NgModule({
  declarations: [DemoComponentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [DemoComponentComponent],
})
export class DemoComponentModule {}
