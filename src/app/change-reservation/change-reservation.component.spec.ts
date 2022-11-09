import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeReservationComponent } from './change-reservation.component';

describe('ChangeReservationComponent', () => {
  let component: ChangeReservationComponent;
  let fixture: ComponentFixture<ChangeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
