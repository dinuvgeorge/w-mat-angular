import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { WmatInputTextComponent } from './wmat-input-text.component';

@NgModule({
  declarations: [WmatInputTextComponent],
  imports: [CommonModule, FormsModule, MatInputModule],
  exports: [WmatInputTextComponent],
})
export class WmatInputTextModule {}
