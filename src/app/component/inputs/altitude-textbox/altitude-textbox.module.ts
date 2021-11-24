import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {TextboxComponent} from "../textbox/textbox.component";
import { AltitudeTextboxComponent } from './altitude-textbox.component';

const routes: Route[] = [{
  path: '', component: TextboxComponent,
  children: [
    {path: '', redirectTo: 'default-functionalities'},
    {
      path: 'default-functionalities',
      loadChildren: () => import('./altitude-default-functionalities/altitude-default-functionalities.module').then(m => m.AltitudeDefaultFunctionalitiesModule)
    }
  ]
}];

@NgModule({
  declarations: [
    AltitudeTextboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AltitudeTextboxModule {
}
