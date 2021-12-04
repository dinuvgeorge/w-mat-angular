import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WmatInputTextModule } from '../../../wmat-inputs/wmat-input-text/wmat-input-text.module';

import { FilterComponent } from './filter.component';
import { SimpleFilterComponent } from './simple-filter/simple-filter.component';

@NgModule({
  declarations: [FilterComponent, SimpleFilterComponent],
  imports: [CommonModule, FormsModule, WmatInputTextModule],
  exports: [FilterComponent],
})
export class FilterModule {}
