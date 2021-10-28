import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  isLogged:boolean=false;
  constructor(private usrAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.isLogged=this.usrAuthService.isLogged();
  }

  login()
  {
    this.usrAuthService.login("email@email.com", "12345");
    this.isLogged=true;
  }

  logout()
  {
    this.usrAuthService.logout();
    this.isLogged=false;
  }

}
