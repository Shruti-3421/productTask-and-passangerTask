import { Component, Input, OnInit } from '@angular/core';
import { Ipassanger } from 'src/app/shared/models/passanger.interface';
import { PassangersService } from 'src/app/shared/services/passangers.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  @Input() passObj !: Ipassanger;
  isinEditMode : boolean = false;
  constructor(private _passService : PassangersService) { }

  ngOnInit(): void {
  }
  onEdit(){
    this.isinEditMode= !this.isinEditMode;
  }
  onDone(fullname: string){
    this.isinEditMode= !this.isinEditMode;
    let updateObj={
      ...this.passObj,
      fullname: fullname
    }
    console.log(updateObj);
    this._passService.updatePass(updateObj)
  }
  onDelete(){
     this._passService.rempovePass(this.passObj.id);
  }
}
