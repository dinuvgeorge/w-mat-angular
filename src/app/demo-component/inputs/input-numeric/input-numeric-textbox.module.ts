import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InputNumericTextboxComponent } from './input-numeric-textbox.component';

const routes: Route[] = [
  {
    path: '',
    component: InputNumericTextboxComponent,
    children: [
      { path: '', redirectTo: 'default-functionalities' },
      {
        path: 'default-functionalities',
        loadChildren: () =>
          import(
            './input-numeric-default-functionalities/input-numeric-default-functionalities.module'
          ).then((m) => m.InputNumericDefaultFunctionalitiesModule),
      },
    ],
  },
];

@NgModule({
  declarations: [InputNumericTextboxComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class InputNumericTextboxModule {}
