import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css','./nicepage.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

searchValue: string ='';

changeSearchValue(eventData: Event){
console.log((<HTMLInputElement>eventData.target).value)
this.searchValue = (<HTMLInputElement>eventData.target).value;



}
}
