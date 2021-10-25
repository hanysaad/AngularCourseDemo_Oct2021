import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private usrAuthService: UserAuthService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.usrAuthService.login("email@email.com", "12345");
  }

  logout()
  {
    this.usrAuthService.logout();
  }

}
