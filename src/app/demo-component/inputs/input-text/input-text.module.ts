import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InputTextComponent } from './input-text.component';

const routes: Route[] = [
  {
    path: '',
    component: InputTextComponent,
    children: [
      { path: '', redirectTo: 'default-functionalities' },
      {
        path: 'default-functionalities',
        loadChildren: () =>
          import(
            './input-text-default-functionalities/input-text-default-functionalities.module'
          ).then((m) => m.InputTextDefaultFunctionalitiesModule),
      },
    ],
  },
];

@NgModule({
  declarations: [InputTextComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [InputTextComponent],
})
export class InputTextModule {}
