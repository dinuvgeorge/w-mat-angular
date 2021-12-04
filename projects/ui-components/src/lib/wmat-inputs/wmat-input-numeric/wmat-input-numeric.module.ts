import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WmatInputNumericComponent } from './wmat-input-numeric.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [WmatInputNumericComponent],
  imports: [CommonModule, FormsModule, MatInputModule],
  exports: [WmatInputNumericComponent],
})
export class WmatInputNumericModule {}
