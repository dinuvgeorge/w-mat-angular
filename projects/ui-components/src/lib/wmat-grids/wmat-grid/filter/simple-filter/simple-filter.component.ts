import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'wmat-simple-filter',
  templateUrl: './simple-filter.component.html',
  styleUrls: ['./simple-filter.component.css']
})
export class SimpleFilterComponent {

  @Output() applyFilter = new EventEmitter<string>();

  filterValue = '';

  changeFilter() {
    this.applyFilter.emit(this.filterValue);
  }

}
