import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';
import {Location} from '@angular/common'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  sentPrdID:number=0;
  prd:Product|undefined;
  private subscriptions: Subscription[]=[];

  constructor(private activatedRoute: ActivatedRoute
              , private router: Router
              , private prdService:ProductService
              , private location: Location) {
   }

  ngOnInit(): void {
      // Get route params snapshot, BUT will not notify on change
        // this.sentPrdID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
        // this.prd=this.prdService.getProductByID(this.sentPrdID);

      // Subscribe route params observable, to get NOTIFIED on evey change.
      // this.activatedRoute.paramMap.subscribe(
      //   (paramMap)=>{
      //     this.sentPrdID=Number(paramMap.get("pid"));
      //     this.prd=this.prdService.getProductByID(this.sentPrdID);
      //   },
      //   (err)=>{
      //     console.log(err)
      //   }
      // );

      // Assign returned subscription to vaariable, so we can unsubscribe
      let subscription:Subscription=this.activatedRoute.paramMap.subscribe(
        (paramMap)=>{
          this.sentPrdID=Number(paramMap.get("pid"));
          this.prd=this.prdService.getProductByID(this.sentPrdID);
        },
        (err)=>{
          console.log(err)
        }
      );
     this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    for(let sub of this.subscriptions)
      sub.unsubscribe();
   }

  goBack(){
    this.location.back();
  }

  prevProduct(){
    this.router.navigate(['/Product/',--this.sentPrdID]);
    // Bad Solution
      // this.prd=this.prdService.getProductByID(this.sentPrdID);
  }

  nextProdcut(){
    this.router.navigate(['/Product/',++this.sentPrdID]);
    // Bad Solution
      // this.prd=this.prdService.getProductByID(this.sentPrdID);
  }

}
