import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isUsrLogged:boolean=false;

  private loggedStatusSubject= new BehaviorSubject(false);

  constructor() { }
  login(usrEmail:string, usrPass:string){
    //Call login API, get user name, password and retrun Access token

    //Generate fake token
    let fakeToken: string='';
    if(usrEmail.length>3 && usrPass.length>3)
    {
      fakeToken='AngDemo123';
      localStorage.setItem('usrToken', fakeToken);
      this.isUsrLogged=true;

      this.loggedStatusSubject.next(true);
    }
  }

  logout(){
    // Call logout API
    localStorage.removeItem('usrToken');
    this.isUsrLogged=false;
    
    this.loggedStatusSubject.next(false);
  }

  isLogged():boolean{
    return this.isUsrLogged;
  }

  isLoggedSubject():Observable<boolean>
  {
    return this.loggedStatusSubject;
  }
}
