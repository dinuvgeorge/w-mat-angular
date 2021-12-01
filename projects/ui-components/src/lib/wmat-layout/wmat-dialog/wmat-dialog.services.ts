import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/portal";
import {MatDialogRef} from "@angular/material/dialog/dialog-ref";

import {WmatDialogConfig} from "./wmat-dialog/wmat-dialog-config";


@Injectable()
export class WmatDialogServices {

  constructor(public dialog: MatDialog) {
  }

  open<T, D = any, R = any>(template: ComponentType<T> | TemplateRef<T>, config?: WmatDialogConfig<D>): MatDialogRef<T, R> {
    return this.dialog.open(template, config);
  };

}
