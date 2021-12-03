import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DialogOverviewComponent } from './dialog-overview.component';

const routes: Route[] = [{ path: '', component: DialogOverviewComponent }];

@NgModule({
  declarations: [DialogOverviewComponent],
  exports: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DialogOverviewModule {}
