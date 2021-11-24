import {Injectable} from '@angular/core';
import {Sort} from "@angular/material/sort";

@Injectable()
export class SortService {

  sortData(sort: Sort, dataSource: any) {
    const data = dataSource.slice();
    if (!sort.active || sort.direction === '') {
      return data;
    }

    return data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return SortService.compare(a.name, b.name, isAsc);
        case 'calories':
          return SortService.compare(a.calories, b.calories, isAsc);
        case 'fat':
          return SortService.compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return SortService.compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return SortService.compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

  private static compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
