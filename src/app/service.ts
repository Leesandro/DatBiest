import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
   }
   @Injectable()
export class Service {
 constructor(private http:HttpClient) {}
restaurantname='';



 getUserData() {
    return this.http.get('https://restaurantsv1.herokuapp.com/api/v1.0/User/all');
    }
    addUserData(postUser: Object) {
    let endPoint = "https://restaurantsv1.herokuapp.com/api/v1.0/User"
    this.http.post(endPoint, postUser).subscribe(data => {
    console.log(data);
    });
    }
    loginUserData(postUser: Object) {
           let endPoint = "https://restaurantsv1.herokuapp.com/api/v1.0/User/anmeldung"
           this.http.post(endPoint, postUser).subscribe(data => {
           console.log(data);
           });
       }
    addReservationsData(postReservations: Object) {
           let endPoint = "https://restaurantsv1.herokuapp.com/api/v1.0/Reservations"
           this.http.post(endPoint, postReservations).subscribe(data => {
           console.log(data);
           });
       }
    getReservationsData() {
           return this.http.get('https://restaurantsv1.herokuapp.com/api/v1.0/Reservations/all');
       }

    getRestaurantsData(city: any){
        return this.http.get('https://restaurantsv1.herokuapp.com/api/v1.0/',city);
    }


 GetName(name:any){
    this.restaurantname = name;
    console.log(this.restaurantname)
 }

    ChangeMessage(){
       return  this.restaurantname;
        
    }








}