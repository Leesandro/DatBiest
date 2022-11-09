import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSignInComponent } from './restaurant-sign-in.component';

describe('RestaurantSignInComponent', () => {
  let component: RestaurantSignInComponent;
  let fixture: ComponentFixture<RestaurantSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
