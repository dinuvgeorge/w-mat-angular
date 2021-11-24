import {AfterContentInit, AfterViewInit, Component, ContentChild, Input, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {WmatColumnsDirective} from "./column/directive/wmat-columns.directive";
import {DEFAULT_FILTER_SETTINGS, WmatFilterSettings} from "./filter/model/wmat-filter-settings";
import {DEFAULT_PAGE_SETTINGS, WmatPageSettings} from "./paginator/model/wmat-page-settings";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'wmat-wmat-grid',
  templateUrl: './wmat-grid.component.html',
  styleUrls: ['./wmat-grid.component.css']
})
export class WmatGridComponent<T> implements AfterContentInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ContentChild(WmatColumnsDirective) columnsDirective: WmatColumnsDirective | undefined = undefined;

  @Input() allowFiltering = true;
  @Input() filterSettings: WmatFilterSettings = DEFAULT_FILTER_SETTINGS;
  @Input() allowPaging = true;
  @Input() pageSettings: WmatPageSettings = DEFAULT_PAGE_SETTINGS;

  @Input() set dataSource(value: T[] | undefined) {
    this.matDataSource = new MatTableDataSource<T>(value);
  }

  displayedColumns: string[] | undefined;
  matDataSource = new MatTableDataSource<T>([]);

  ngAfterContentInit(): void {
    this.displayedColumns = this.columnsDirective?.getDisplayedColumns();
  }

  ngAfterViewInit(): void {
    if (this.sort) {
      this.matDataSource.sort = this.sort;
    }
  }


}
