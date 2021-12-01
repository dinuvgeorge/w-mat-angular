import {Component, ContentChildren, QueryList, ViewChild} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {WmatTabComponent} from "../wmat-tab/wmat-tab.component";


@Component({
  selector: 'wmat-tab-group',
  templateUrl: './wmat-tab-group.component.html',
  styleUrls: ['./wmat-tab-group.component.css']
})
export class WmatTabGroupComponent {

  @ViewChild(MatTabGroup)
  public tabGroup: MatTabGroup | undefined = undefined;

  @ContentChildren(WmatTabComponent)
  protected tabs: QueryList<WmatTabComponent> | undefined = undefined;

  public ngAfterViewInit() {
    if (this.tabs) {
      const matTabsFromQueryList = this.tabs.map((tab: WmatTabComponent) => tab.matTab);
      const list = new QueryList<MatTab>();
      list.reset([matTabsFromQueryList]);

      if (this.tabGroup) {
        this.tabGroup._tabs = list;
        this.tabGroup?.ngAfterContentInit();
      }
    }
  }

}
