import {Component} from '@angular/core';
import {demoComponentsList} from "./demo-components";

@Component({
  selector: 'app-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss']
})
export class DemoComponentComponent {

  componentsList = demoComponentsList;

  selectedComponentParent = 'Grid';
  selectedComponentChild = 'Overview';

}
