import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MakeReservationComponent } from '../make-reservation/make-reservation.component';

@Component({
  selector: 'an-navbar-guest',
  templateUrl: './navbar-guest.component.html',
  styleUrls: ['./navbar-guest.component.css','./nicepage.css']
})
export class NavbarGuestComponent implements OnInit {
 
 
 
  constructor(private route: Router) { }

  ngOnInit(): void { }
 
MakeReservations(){
  this.route.navigate(['makereservation']);

}
ShowReservations(){
  this.route.navigate(['reservations']);
}
}
