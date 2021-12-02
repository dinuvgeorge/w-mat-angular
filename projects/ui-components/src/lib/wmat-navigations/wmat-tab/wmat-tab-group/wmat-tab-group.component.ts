import {Component, ContentChildren, QueryList} from '@angular/core';
import {WmatTabDirective} from "../wmat-tab/wmat-tab.directive";


@Component({
  selector: 'wmat-tab-group',
  templateUrl: './wmat-tab-group.component.html',
  styleUrls: ['./wmat-tab-group.component.css']
})
export class WmatTabGroupComponent {

  @ContentChildren(WmatTabDirective, {descendants: true})
  wmatTabsDirectives: QueryList<WmatTabDirective> | undefined;

}
