import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';
import { ProductJSONServerVM } from '../ViewModels/product-jsonserver-vm';

@Injectable({
  providedIn: 'root'
})
export class ProductsFrmAPIService {
  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //, 'Authorization':localStorage.get('AccessToken')
      })
    }
   }

  getAllProducts():Observable<Product[]>
  {
    // return this.httpClient.get<Product[]>(environment.APIURL + '/getproducts');
    return this.httpClient.get<Product[]>(environment.APIURL + '/products');
    // this.genrricAPICaller.getAll("/Product")
  }

  getProductByID(pID: number):Observable<Product>
  {
    return this.httpClient.get<Product>(environment.APIURL + '/products/' +pID);
  }

  getProductByCatID(cID: number):Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(environment.APIURL + '/products?CategoryID=' +cID,);
  }

  insertProduct(newPrd: ProductJSONServerVM): Observable<any>
  {
    return this.httpClient.post(`${environment.APIURL}/Products`,JSON.stringify(newPrd),this.httpOptions);
  }

}
