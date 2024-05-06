import { Injectable } from '@angular/core';
import { Ipassanger } from '../models/passanger.interface';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class PassangersService {
  passengerArray : Array<Ipassanger> =[
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];
  constructor(private _snacbarService : SnackBarService) { }

  fetchAllPassangers(){
    return this.passengerArray;
  }

  updatePass(updateObj: Ipassanger){
    let getIndex=this.passengerArray.findIndex(pass =>pass.id === updateObj.id)
    this.passengerArray[getIndex] = updateObj;
    this._snacbarService.snackbar(`The fullname ${updateObj.fullname} is updated`)
  }

  rempovePass(deleteId: number){
    let getIndex=this.passengerArray.findIndex(pass => pass.id === deleteId);
    this.passengerArray.splice(getIndex, 1)
  }
}
