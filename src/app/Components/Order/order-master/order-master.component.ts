import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: Category[]=[];
  selectedCategory:number=0;// send to child component using @Input()
  totalPriceForBoughtItems:number=0;// calculate its value from child component using @output()
  /*
  "non-null assertion operator" or "bang operator" !:
  The bang operator tells the compiler to temporarily relax the "not null" constraint that it might otherwise demand.

  ! operator is non-null assertion operator. 
  It is a way to tell the compiler "this expression cannot be null 
  or undefined here, so don't complain about the possibility of it being null or undefined."

  A new ! post-fix expression operator may be used to assert that its operand is non-null and non-undefined in contexts where the type checker is unable to conclude that fact. Specifically, the operation x! produces a value of the type of x with null and undefined excluded. Similar to type assertions of the forms <T>x and x as T, the ! non-null assertion operator is simply removed in the emitted JavaScript code.
   */
  //@ViewChild('custFullName') custNameInp!: ElementRef;

  // @ViewChild('custFullName') custNameInp: ElementRef|null=null;
  // @ViewChild('custFullName') custNameInp?: ElementRef;
  @ViewChild('custFullName') custNameInp: ElementRef={} as ElementRef;

  @ViewChild(OrderDetailsComponent) orderDetailsCmp!: OrderDetailsComponent;

  constructor() {
    this.catList=[
      {ID:1, Name:'Laptop'},
      {ID:2, Name:'Tablet'},
      {ID:3, Name:'Mobile'},
    ];
   }

  ngAfterViewInit(): void {
    //if(this.custNameInp)
      this.custNameInp.nativeElement.style.backgroundColor="Gray";
   //this.custNameInp.nativeElement.value="Your name";

   console.log("Order total price in nested comp.: " + this.orderDetailsCmp.totalOrderPrice);
  }
   
  checkCustName(){
    let custName;
    //if(this.custNameInp)
      custName=this.custNameInp.nativeElement.value;
    
    console.log("You entered: " + custName);

    console.log("Order total price (Using ViewChild): " + this.orderDetailsCmp.totalOrderPrice)
  }

  ngOnInit(): void {
  }

  onTotalPriceChanged(OrderTotalPrice:number)
  {
    this.totalPriceForBoughtItems=OrderTotalPrice;
  }
}
