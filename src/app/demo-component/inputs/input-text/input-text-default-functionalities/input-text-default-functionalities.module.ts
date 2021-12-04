import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InputTextDefaultFunctionalitiesComponent } from './input-text-default-functionalities.component';
import { WmatInputTextModule } from 'ui-components';

const routes: Route[] = [
  { path: '', component: InputTextDefaultFunctionalitiesComponent },
];

@NgModule({
  declarations: [InputTextDefaultFunctionalitiesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WmatInputTextModule],
  exports: [InputTextDefaultFunctionalitiesComponent],
})
export class InputTextDefaultFunctionalitiesModule {}
