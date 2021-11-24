import {ContentChild, Directive, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef} from '@angular/core';
import {WmatContextmenuComponent} from "./wmat-contextmenu.component";

@Directive({
  selector: '[wmat-context-menu-item]'
})

export class WmatContextmenuItemDirective {

  @Input()
  icon = '';

  @Input()
  label = '';

  @Input()
  disabled = false;

  @Output() itemSelected: EventEmitter<void> = new EventEmitter();
  @Output() itemOver: EventEmitter<void> = new EventEmitter();

  @ContentChild(TemplateRef)
  template: TemplateRef<any> | undefined;

  @Input()
  subMenu: WmatContextmenuComponent<any> | undefined;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
    renderer.setAttribute(element.nativeElement, 'class', 'mat-menu-item');
  }

  itemSelectedMethod(): void {
    if (this.itemSelected.observers.length > 0) {
      this.itemSelected.emit();
    }
  }

  itemOverMethod(): void {
    if (this.itemOver.observers.length > 0) {
      this.itemOver.emit();
    }
  }
}
