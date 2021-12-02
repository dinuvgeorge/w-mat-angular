import {Component, ContentChildren, QueryList} from '@angular/core';
import {WmatTabComponent} from "../wmat-tab/wmat-tab.component";


@Component({
  selector: 'wmat-tab-group',
  templateUrl: './wmat-tab-group.component.html',
  styleUrls: ['./wmat-tab-group.component.css']
})
export class WmatTabGroupComponent {

  @ContentChildren(WmatTabComponent) tabItems: QueryList<WmatTabComponent> | undefined;

}
