import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/product';
import { ProductJSONServerVM } from 'src/app/ViewModels/product-jsonserver-vm';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  prdFrm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.prdFrm=this.fb.group(
      {
        ID: Date.now(),
        Name:['',[Validators.required,Validators.minLength(3)]],
        Price:['', Validators.required],
        Quantity:['',[Validators.required,Validators.min(1),Validators.max(1000)]]
      }
    );
   }

  ngOnInit(): void {
  }

  UpdateProduct()
  {
    alert(this.prdFrm.controls["Name"].value)
    console.log(this.prdFrm.value)
  }

}
