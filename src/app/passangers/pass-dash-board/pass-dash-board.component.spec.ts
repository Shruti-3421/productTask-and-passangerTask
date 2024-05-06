import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDashBoardComponent } from './pass-dash-board.component';

describe('PassDashBoardComponent', () => {
  let component: PassDashBoardComponent;
  let fixture: ComponentFixture<PassDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
