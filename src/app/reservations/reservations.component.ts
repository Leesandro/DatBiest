import { Component, OnInit } from '@angular/core';
import { Service } from '../service';


@Component({
  selector: 'an-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css','./nicepage.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private service: Service) { }
  public reservation: any;
  ngOnInit(): void {
  
  this.service.getReservationsData().subscribe(
    data => { this.reservation = data },
    err => console.log(err),
    () => console.log('loading done.')
    );
    }
}
