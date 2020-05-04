import { Injectable } from '@angular/core';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public dialog: MatDialog) { }

  show({type, title, message, showButtons}): MatDialogRef<any> {
    return this.dialog.open(AlertComponent, {
      data: {type, title, message, showButtons}
    });
  }
}
