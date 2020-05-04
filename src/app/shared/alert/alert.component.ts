import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AlertTypes } from 'src/app/services/alert/alert-types.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alertData: {type: number, title: string, message: string, showButtons: boolean} = null;
  titleCss = 'text-success';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {type: number, title: string, message: string, showButtons: boolean}) {
    this.alertData = this.data;
    if (this.data.type === AlertTypes.success) {
      this.titleCss = 'text-success';
    } else if (this.data.type === AlertTypes.error) {
      this.titleCss = 'text-danger';
    } else if (this.data.type === AlertTypes.warning) {
      this.titleCss = 'text-warning font-weight-bold';
    }
  }

  ngOnInit(): void { }

}
