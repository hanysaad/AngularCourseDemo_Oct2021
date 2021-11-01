import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { ProductsFrmAPIService } from 'src/app/Services/products-frm-api.service';
import { ProductJSONServerVM } from 'src/app/ViewModels/product-jsonserver-vm';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  catList: Category[] = [];

  prd: ProductJSONServerVM = {} as ProductJSONServerVM;
  constructor(private prodcutsFrmAPI: ProductsFrmAPIService
    , private router: Router) {

    this.catList = [
      { ID: 1, Name: 'Laptop' },
      { ID: 2, Name: 'Tablet' },
      { ID: 3, Name: 'Mobile' },
    ];

    //console.log(dateTimeSpan);
    // this.prd =
    // {
    //   id: 8,
    //   Name: 'From JSON Server',
    //   Price: 100,
    //   Quantity: 10,
    //   ImgURL: 'https://fakeimg.pl/250x100',
    //   CategoryID: 3
    // }
  }

  ngOnInit(): void {
  }

  insertProduct() {
    let dateTimeSpan:number =Date.now();
    this.prd.id=dateTimeSpan;

    this.prodcutsFrmAPI.insertProduct(this.prd).subscribe((res => {
      this.router.navigate(['/Order']);
    }),
      (err) => {
        console.log("Can't insert dure to error");
      });
  }

}
