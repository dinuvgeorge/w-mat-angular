import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog.component';

const routes: Route[] = [
  {
    path: '',
    component: DialogComponent,
    children: [
      { path: '', redirectTo: 'overview' },
      {
        path: 'overview',
        loadChildren: () =>
          import('./dialog-overview/dialog-overview.module').then(
            (m) => m.DialogOverviewModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [DialogComponent],
})
export class DialogModule {}
