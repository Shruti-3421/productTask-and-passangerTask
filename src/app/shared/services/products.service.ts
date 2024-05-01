import { Injectable } from '@angular/core';
import { Iproduct, ProductsStatus } from '../models/products.interface';
import { SnackBarService } from './snack-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr: Array<Iproduct> =[
    {
      pname: "Iphone 16",
      pdetails: "Iphone is advanced",
      pstatus: ProductsStatus.Inprogress,
      id: "qrty123"
    },
    {
      pname: "Realme 10",
      pdetails: "Iphone is advanced",
      pstatus: ProductsStatus.Dispatched,
      id: "qrty123"
    }
  ]
  constructor(
    private _snackbar : SnackBarService
  ) { }


  fetchAllProducts(){
    return this.productsArr
  }

  addNewProd(prod: Iproduct){
    this.productsArr.unshift(prod);
    this._snackbar.snackBar(`New Product ${prod.pname} is added`)
  }

  updatedPost(id: string, updateStatus: ProductsStatus){
    this.productsArr.forEach(prod =>{
      if(prod.id === id){
        prod.pstatus = updateStatus;
        this._snackbar.snackBar(`The status of product ${prod.pname} is updated`)
      }
    })
  }
}
