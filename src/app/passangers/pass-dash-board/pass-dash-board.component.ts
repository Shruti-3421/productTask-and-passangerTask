import { Component, Input, OnInit } from '@angular/core';
import { Ipassanger } from 'src/app/shared/models/passanger.interface';
import { PassangersService } from 'src/app/shared/services/passangers.service';

@Component({
  selector: 'app-pass-dash-board',
  templateUrl: './pass-dash-board.component.html',
  styleUrls: ['./pass-dash-board.component.scss']
})
export class PassDashBoardComponent implements OnInit {
  passArr !: Array<Ipassanger>;
  checkInCount !: number;
  constructor(
    private _passService : PassangersService
  ) { }

  ngOnInit(): void {
    this.passArr= this._passService.fetchAllPassangers();
    this.getcheckIncount();
  }
  getcheckIncount(){
    // return this.passArr.filter(pass => pass.checkedIn)
    this.checkInCount = this.passArr.filter(pass => pass.checkedIn).length
    return this.checkInCount
  }
}
