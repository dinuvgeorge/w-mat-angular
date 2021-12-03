import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AltitudeDefaultFunctionalitiesComponent } from './altitude-default-functionalities.component';
import { WmatAltitudeTextboxModule } from 'ui-components';

const routes: Route[] = [
  { path: '', component: AltitudeDefaultFunctionalitiesComponent },
];

@NgModule({
  declarations: [AltitudeDefaultFunctionalitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WmatAltitudeTextboxModule,
  ],
  exports: [AltitudeDefaultFunctionalitiesComponent],
})
export class AltitudeDefaultFunctionalitiesModule {}
