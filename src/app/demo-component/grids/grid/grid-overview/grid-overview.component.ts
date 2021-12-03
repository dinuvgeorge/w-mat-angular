import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-grid',
  templateUrl: './grid-overview.component.html',
  styleUrls: ['./grid-overview.component.scss'],
})
export class GridOverviewComponent {
  demoDataSource: PeriodicElement[] = ELEMENT_DATA;

  htmlCode =
    '<wmat-grid [dataSource]="demoDataSource">\n' +
    '  <wmat-columns>\n' +
    '    <wmat-column field="template" headerText="Template">\n' +
    '      <ng-template #template>\n' +
    '        Template Column\n' +
    '      </ng-template>\n' +
    '    </wmat-column>\n' +
    '    <wmat-column field="name" headerText="Name"></wmat-column>\n' +
    '    <wmat-column field="position" headerText="Position"></wmat-column>\n' +
    '    <wmat-column field="weight" headerText="Weight"></wmat-column>\n' +
    '    <wmat-column field="symbol" headerText="Symbol"></wmat-column>\n' +
    '  </wmat-columns>\n' +
    '</wmat-grid>';

  tsCode =
    "import {Component} from '@angular/core';\n" +
    '\n' +
    '\n' +
    'export interface PeriodicElement {\n' +
    '  name: string;\n' +
    '  position: number;\n' +
    '  weight: number;\n' +
    '  symbol: string\n' +
    '}\n' +
    '\n' +
    'const ELEMENT_DATA: PeriodicElement[] = [\n' +
    "  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n" +
    "  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n" +
    "  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n" +
    "  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n" +
    "  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n" +
    "  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n" +
    "  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n" +
    "  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n" +
    "  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n" +
    "  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n" +
    "  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n" +
    "  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n" +
    "  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n" +
    "  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n" +
    "  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n" +
    "  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n" +
    "  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n" +
    "  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n" +
    "  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n" +
    "  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'}\n" +
    '];\n' +
    '\n' +
    '@Component({\n' +
    "  selector: 'app-grid',\n" +
    "  templateUrl: './grid-overview.component.html',\n" +
    "  styleUrls: ['./grid-overview.component.scss']\n" +
    '})\n' +
    'export class GridOverviewComponent {\n' +
    '  demoDataSource: PeriodicElement[] = ELEMENT_DATA;\n' +
    '}';
}
