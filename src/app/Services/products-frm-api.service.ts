import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsFrmAPIService {

  constructor(private httpClient: HttpClient) {

   }

  getAllProducts():Observable<Product[]>
  {
    // return this.httpClient.get<Product[]>(environment.APIURL + '/getproducts');
    return this.httpClient.get<Product[]>(environment.APIURL + '/products');

  }

  getProductByID(pID: number):Observable<Product>
  {
    return this.httpClient.get<Product>(environment.APIURL + '/products/' +pID);
  }

  getProductByCatID(cID: number):Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(environment.APIURL + '/products?CategoryID=' +cID);
  }

  insertProduct(newPrd: Product)
  {

  }

}
