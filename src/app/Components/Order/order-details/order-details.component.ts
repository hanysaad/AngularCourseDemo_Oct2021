import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {EventEmitter} from '@angular/core'
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnChanges {
  //prdList: Product[]=[];
  prdListForSelCat: Product[]=[];
  @Input() sentCatIDFrmMaster:number=0;
  totalOrderPrice:number=0;
  @Output() totalPriceChanged: EventEmitter<number>= new EventEmitter<number>();

  constructor(private prdSer:ProductService) {
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.sentCatIDFrmMaster!=0)
      this.prdListForSelCat=this.prdSer.getProductsByCatID(this.sentCatIDFrmMaster);
    else
      this.prdListForSelCat=this.prdSer.getAllProducts();

      
    // if(this.sentCatIDFrmMaster!=0)
    //   this.prdListForSelCat= this.prdList.filter(item=>item.CategoryID==this.sentCatIDFrmMaster);
    // else
    //   this.prdListForSelCat=Array.from(this.prdList)     
  }

  ngOnInit(): void {
  }

  // getProductsByCatID(){
     
  // }

  calcTotalPrice(itemPrice:any, itemCount:any)
  {
    // this.totalOrderPrice+= (itemPrice as number*itemCount as number);
    // this.totalOrderPrice+= (parseInt(itemPrice)*parseInt(itemCount));
    this.totalOrderPrice+= (+itemPrice*+itemCount);
    this.totalPriceChanged.emit(this.totalOrderPrice);
  }
} 