import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WmatButtonComponent } from './wmat-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WmatButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [WmatButtonComponent],
})
export class WmatButtonModule {}
