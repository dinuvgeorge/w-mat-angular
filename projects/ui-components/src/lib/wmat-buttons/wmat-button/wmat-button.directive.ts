import {Directive} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Directive({
  selector: 'button[wmat-button], ' +
    'button[wmat-raised-button], ' +
    'button[wmat-icon-button], ' +
    'button[wmat-fab], ' +
    'button[wmat-mini-fab], ' +
    'button[wmat-stroked-button], ' +
    'button[wmat-flat-button]", ' +
    '["wmatButton"]'
})
export class WmatButtonDirective extends MatButton {


}
