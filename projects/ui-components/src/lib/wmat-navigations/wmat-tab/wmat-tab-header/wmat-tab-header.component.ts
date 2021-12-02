import {Component, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'wmat-tab-header',
  templateUrl: './wmat-tab-header.component.html',
  styleUrls: ['./wmat-tab-header.component.css']
})
export class WmatTabHeaderComponent {

  @ViewChild(TemplateRef) public headerTemplate: TemplateRef<any> | undefined;
  @Input() title = ''

}
