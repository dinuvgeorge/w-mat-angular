import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {TextboxComponent} from "./textbox.component";

const routes: Route[] = [{
  path: '', component: TextboxComponent,
  children: [
    {path: '', redirectTo: 'default-functionalities'},
    {
      path: 'default-functionalities',
      loadChildren: () => import('./textbox-default-functionalities/textbox-default-functionalities.module').then(m => m.TextboxDefaultFunctionalitiesModule)
    }
  ]
}];

@NgModule({
  declarations: [TextboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [TextboxComponent],
})
export class TextboxModule {
}
