import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavbarGuestComponent } from '../navbar-guest/navbar-guest.component';
import { Service } from '../service';


@Component({
  selector: 'an-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css','./nicepage.css','./Search.css']
})
export class SearchListComponent implements OnInit {

 
 
 

  constructor(private Navbar: NavbarGuestComponent, private service: Service) { }

ShowReservation(name: any){
this.Navbar.MakeReservations();
this.service.GetName(name);
}




  ngOnInit(): void {
 
  }
 public restaurant =[
{id:1, city:'Mosbach', restaurantname:'Krone', food:'Deutsch',opendays:['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'], opening: '12:00', closing:'23:00'},
{id:2, city:'Stuttgart', restaurantname:'Massimo', food:'Iltalienisch',opendays:['Sonntag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'], opening: '11:00', closing:'22:00'},
{id:3, city:'Heilbronn', restaurantname:'Zur Post', food:'Deutsch',opendays:['Montag','Dienstag','Donnerstag','Freitag','Samstag'], opening: '14:00', closing:'22:00'},
{id:4, city:'Mosbach', restaurantname:'QQ', food:'Sushi',opendays:['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'], opening: '17:00', closing:'02:00'},


  ];

}


