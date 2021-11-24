import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SETTINGS, WmatPageSettings} from "./model/wmat-page-settings";

@Component({
  selector: 'wmat-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent<T> implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @Input() matDataSource = new MatTableDataSource<T>([]);
  @Input() pageSettings: WmatPageSettings = DEFAULT_PAGE_SETTINGS;

  pageIndex: number = DEFAULT_PAGE_INDEX;
  length = 500;
  pageSize = 10;

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.matDataSource.paginator = this.paginator;
    }
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

}
