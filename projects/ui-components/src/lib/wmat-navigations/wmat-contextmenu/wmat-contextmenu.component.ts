import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {WmatContextmenuItemDirective} from "./wmat-contextmenu-item.directive";

@Component({
  selector: 'wmat-wmat-menu',
  templateUrl: './wmat-contextmenu.component.html',
  styleUrls: ['./wmat-contextmenu.component.css']
})
export class WmatContextmenuComponent<T> {

  @Input()
  mouseLeaveClose = true;

  @Input()
  showOpenButton = false;

  @ViewChild(MatMenu, {static: true})
  matMenu: MatMenu | undefined;

  @ViewChild(MatMenuTrigger, {static: true})
  matMenuTrigger: MatMenuTrigger | undefined;

  @ContentChild('contextMenuTemplate', {static: false})
  template: TemplateRef<any> | undefined;

  @ContentChildren(WmatContextmenuItemDirective, {descendants: true})
  wmatMenuItemDirectives: QueryList<WmatContextmenuItemDirective> | undefined;

  @Output() closed: EventEmitter<void> = new EventEmitter();

  contextMenuPosition = {x: '0px', y: '0px'};

  constructor(public elRef: ElementRef) {
  }

  public open(mouseEvent: MouseEvent, data: T) {
    if (!this.matMenuTrigger) {
      return;
    }

    this.matMenuTrigger.menuData = {'data': data};
    if (mouseEvent == null) {
      this.matMenuTrigger.openMenu();
    } else {
      mouseEvent.preventDefault();
      this.contextMenuPosition.x = mouseEvent.clientX + 'px';
      this.contextMenuPosition.y = mouseEvent.clientY + 'px';
      this.matMenuTrigger.menu.focusFirstItem('mouse');
      this.matMenuTrigger.openMenu();
    }
  }

  closedMethod(args: any): void {
    if (this.closed.observers.length > 0) {
      this.closed.emit();
    }
  }

  closeMenu() {
    this.matMenuTrigger?.closeMenu();
  }

  mouseLeaveMethod() {
    if (!this.mouseLeaveClose) {
      return;
    }

    this.matMenuTrigger?.closeMenu();
  }
}
