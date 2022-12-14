import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { makeBindingParser } from '@angular/compiler'
import { Routes, RouterModule} from '@angular/router';
import { Service } from './service';
import {HttpClientModule} from '@angular/common/http'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RestaurantSignInComponent } from './restaurant-sign-in/restaurant-sign-in.component';
import { ChangeReservationComponent } from './change-reservation/change-reservation.component';
import { ChangeUserDataComponent } from './change-user-data/change-user-data.component';
import { ChangeRestaurantDataComponent } from './change-restaurant-data/change-restaurant-data.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { SearchListComponent } from './search-list/search-list.component';
import { NavbarGuestComponent } from './navbar-guest/navbar-guest.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavbarRestaurantComponent } from './navbar-restaurant/navbar-restaurant.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationsComponent,
    LogInComponent,
    SignInComponent,
    RestaurantSignInComponent,
    ChangeReservationComponent,
    ChangeUserDataComponent,
    ChangeRestaurantDataComponent,
    MakeReservationComponent,
    SearchListComponent,
    NavbarGuestComponent,
    NavbarUserComponent,
    NavbarRestaurantComponent,
    FooterComponent,
    SearchbarComponent,
    

  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Service],
  exports:[
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
