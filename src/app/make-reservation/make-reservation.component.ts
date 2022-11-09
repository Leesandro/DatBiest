import { Component, OnInit } from '@angular/core';
import { NavbarGuestComponent } from '../navbar-guest/navbar-guest.component';
import { Service } from '../service';
import { SearchListComponent } from '../search-list/search-list.component';
import { AppComponent } from '../app.component';
@Component({
  selector: 'an-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css', './Makereservation.css', './nicepage.css']
})
export class MakeReservationComponent implements OnInit {

  constructor(private Navbar: NavbarGuestComponent, private service: Service) {
    
  } 

  ngOnInit(): void {}


    reservationsdate = '';
    reservationstime = '';
    restaurantSeats = '';
   
    restaurantname ='';
    
    GetName(){
      this.restaurantname =  this.service.ChangeMessage();
    }
    
      
    
 
      
    



    storeDataOnDB(): void {
      alert('Text changed to' + this.reservationsdate + this.reservationstime + this.restaurantSeats + this.restaurantname);
      let reservations = {
      date: this.reservationsdate,
      time: this.reservationstime,
      rSeats:  parseInt(this.restaurantSeats),
      rName: this.restaurantname
      };
      this.service.addReservationsData(reservations);
      }
ShowReservation(){
this.Navbar.ShowReservations();
}
}
