import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDashBoardComponent } from './pass-dash-board/pass-dash-board.component';
import { PassCountComponent } from './pass-count/pass-count.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PassDashBoardComponent,
    PassCountComponent,
    PassCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    PassDashBoardComponent
  ]
})
export class PassangersModule { }
