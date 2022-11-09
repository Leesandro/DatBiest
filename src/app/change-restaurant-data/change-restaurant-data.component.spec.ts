import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRestaurantDataComponent } from './change-restaurant-data.component';

describe('ChangeRestaurantDataComponent', () => {
  let component: ChangeRestaurantDataComponent;
  let fixture: ComponentFixture<ChangeRestaurantDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRestaurantDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeRestaurantDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
