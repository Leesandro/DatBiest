import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeReservationComponent } from './change-reservation/change-reservation.component';
import { ChangeRestaurantDataComponent } from './change-restaurant-data/change-restaurant-data.component';
import { ChangeUserDataComponent } from './change-user-data/change-user-data.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RestaurantSignInComponent } from './restaurant-sign-in/restaurant-sign-in.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [

    {path: "", pathMatch:'full',redirectTo:'home'},
    {path: "home", component: HomeComponent},
    {path: "login", component: LogInComponent},
    {path: "reservations", component: ReservationsComponent},
    {path: "signin", component: SignInComponent},
    {path: "restaurantsignin", component: RestaurantSignInComponent},
    {path: "changereservation", component: ChangeReservationComponent},
    {path: "changeuser", component: ChangeUserDataComponent},
    {path: "changerestaurant", component: ChangeRestaurantDataComponent},
    {path: "makereservation", component: MakeReservationComponent},
    {path: "searchlist", component: SearchListComponent},
    {path: "searchbar", component: SearchbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
