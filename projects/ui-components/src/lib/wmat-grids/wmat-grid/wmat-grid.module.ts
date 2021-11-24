import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {FilterModule} from "./filter/filter.module";
import {PaginatorModule} from "./paginator/paginator.module";
import {SortModule} from "./sort/sort.module";

import {WmatGridComponent} from "./wmat-grid.component";
import {WmatColumnDirective} from "./column/directive/wmat-column.directive";
import {WmatColumnsDirective} from "./column/directive/wmat-columns.directive";

@NgModule({
  declarations: [
    WmatGridComponent,
    WmatColumnDirective,
    WmatColumnsDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    FilterModule,
    PaginatorModule,
    SortModule
  ],
  exports: [
    WmatGridComponent,
    WmatColumnDirective,
    WmatColumnsDirective
  ]
})
export class WmatGridModule {
}
