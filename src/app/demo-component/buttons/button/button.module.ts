import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { WmatButtonModule } from 'ui-components';

const routes: Route[] = [
  {
    path: '',
    component: ButtonComponent,
  },
];

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WmatButtonModule],
})
export class ButtonModule {}
