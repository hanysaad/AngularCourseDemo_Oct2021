import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/shared/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: StoreInfo={
    name:"ITI store",
    logo:"https://picsum.photos/200/300.jpg",
    services:["Training", "Education", "Coaching", "Freelancing"]
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
