import {Component, Input, ViewChild} from '@angular/core';
import {MatTab} from "@angular/material/tabs";

@Component({
  selector: 'wmat-tab',
  templateUrl: './wmat-tab.component.html',
  styleUrls: ['./wmat-tab.component.css']
})
export class WmatTabComponent {

  @Input() label = '';

  @ViewChild(MatTab)
  public matTab: MatTab | undefined;

}
