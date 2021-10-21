import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {
  catList: Category[]=[];
  selectedCategory:number=0;// send to child component using @Input()
  totalPriceForBoughtItems:number=0;// calculate its value from child component using @output()

  constructor() {
    this.catList=[
      {ID:1, Name:'Laptop'},
      {ID:2, Name:'Tablet'},
      {ID:3, Name:'Mobile'},
    ];
   }
   

  ngOnInit(): void {
  }

  onTotalPriceChanged(OrderTotalPrice:number)
  {
    this.totalPriceForBoughtItems=OrderTotalPrice;
  }
}
