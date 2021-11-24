import {Component, Input} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {DEFAULT_FILTER_SETTINGS, WmatFilterSettings} from "./model/wmat-filter-settings";

@Component({
  selector: 'wmat-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent<T> {

  @Input() field: string = '';
  @Input() matDataSource = new MatTableDataSource<T>([]);
  @Input() filterSettings: WmatFilterSettings = DEFAULT_FILTER_SETTINGS;

  simpleFilterValue: string = '';

  applyFilter(filterValue: string) {
    // switch (this.filterSettings.sensitivity) {
      // case "insensitive":
      //   this.matDataSource.filter = filterValue.trim().toLowerCase();
      //   break;
      // case "sensitive":
        this.matDataSource.filter = filterValue.trim();
        // break;
    // }

    // switch (this.filterSettings.operator) {
    //   case "exact":
    //     break;
    //   case "startsWith":
    //     this.applyFilterStartsWith();
    //     break;
    //   case "contains":
    //     this.applyFilterContains();
    //     break;
    // }
    this.matDataSource.paginator?.firstPage();
  }

  applyFilterStartsWith() {
    this.matDataSource.filterPredicate = (data: any, filter: string): boolean => {
      switch (this.filterSettings.sensitivity) {
        case "insensitive":
          return data[this.field].toLowerCase().startsWith(filter);
        case "sensitive":
          return data[this.field].startsWith(filter);
      }
    };
  }

  applyFilterContains() {
    this.matDataSource.filterPredicate = (data: any, filter: string): boolean => {
      switch (this.filterSettings.sensitivity) {
        case "insensitive":
          return data[this.field].toLowerCase().inculdes(filter);
        case "sensitive":
          return data[this.field].inculdes(filter);
      }
    };
  }
}
