import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private dialog: MatDialog) { }

  open(): MatDialogRef<LoaderComponent, any>{
    return this.dialog.open(LoaderComponent, {
      width: '250px',
      disableClose: true
    });
  }

  close(loader: MatDialogRef<LoaderComponent, any>) {
    loader.close();
  }

}
