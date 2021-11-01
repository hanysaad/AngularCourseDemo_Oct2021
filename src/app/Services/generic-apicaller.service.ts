import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponseVM } from '../ViewModels/http-response-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericAPICallerService {

  constructor(private httpClient: HttpClient) { }

  getAll(path:string): Observable<HttpResponseVM>
  {
    return this.httpClient.get<HttpResponseVM>(environment +path);
  }

  getByID()
  {

  }

  insertNew()
  {

  }

  update()
  {

  }

  delete()
  {

  }
}
