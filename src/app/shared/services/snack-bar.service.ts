import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(private _snackbar : MatSnackBar) { }

  snackbar(msg: string){
    this._snackbar.open(msg, "close", {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration: 1500
    })
  }


}
