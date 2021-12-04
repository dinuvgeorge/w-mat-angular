import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InputNumericDefaultFunctionalitiesComponent } from './input-numeric-default-functionalities.component';
import { WmatInputNumericModule } from 'ui-components';

const routes: Route[] = [
  { path: '', component: InputNumericDefaultFunctionalitiesComponent },
];

@NgModule({
  declarations: [InputNumericDefaultFunctionalitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WmatInputNumericModule,
  ],
  exports: [InputNumericDefaultFunctionalitiesComponent],
})
export class InputNumericDefaultFunctionalitiesModule {}
