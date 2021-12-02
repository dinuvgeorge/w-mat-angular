import {Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {WmatTabHeaderComponent} from "../wmat-tab-header/wmat-tab-header.component";

@Component({
  selector: 'wmat-tab',
  templateUrl: './wmat-tab.component.html',
  styleUrls: ['./wmat-tab.component.css']
})
export class WmatTabComponent {

  @ViewChild(TemplateRef) public contentTemplate: TemplateRef<any> | undefined;
  @ContentChild(WmatTabHeaderComponent) public itemHeader: WmatTabHeaderComponent | undefined;
  @Input() title = '';

}
