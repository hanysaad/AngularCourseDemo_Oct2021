import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-prodcuts',
  templateUrl: './prodcuts.component.html',
  styleUrls: ['./prodcuts.component.scss']
})
export class ProdcutsComponent implements OnInit {
  prdList: Product[]=[];
  todayDate: Date= new Date();
  constructor() {
    this.prdList=[
      {ID:1, Name: 'Lenovo thinkpad', Price:150456.555, Quantity:1,ImgURL:'https://fakeimg.pl/250x100', CategoryID:1},
      {ID:2, Name: 'Macbook Pro', Price:200, Quantity:2,ImgURL:'https://fakeimg.pl/250x100', CategoryID:1},
      {ID:3, Name: 'Dell XPS', Price:1500000, Quantity:0,ImgURL:'https://fakeimg.pl/250x100', CategoryID:1},
      {ID:4, Name: 'Lenovo Tablet', Price:400, Quantity:40,ImgURL:'https://fakeimg.pl/250x100', CategoryID:2},
      {ID:5, Name: 'IPad', Price:500, Quantity:50,ImgURL:'https://fakeimg.pl/250x100', CategoryID:2},
      {ID:6, Name: 'Smasung Tab 2', Price:600, Quantity:0,ImgURL:'https://fakeimg.pl/250x100', CategoryID:2},
      {ID:7, Name: 'Mi Note 5', Price:700, Quantity:70,ImgURL:'https://fakeimg.pl/250x100', CategoryID:3},
      {ID:5, Name: 'IPhone 12 Pro', Price:800, Quantity:80,ImgURL:'https://fakeimg.pl/250x100', CategoryID:3},
      {ID:6, Name: 'Smasung Note 21', Price:900, Quantity:90,ImgURL:'https://fakeimg.pl/250x100', CategoryID:3}
    ];
   }

  ngOnInit(): void {
  }

}
