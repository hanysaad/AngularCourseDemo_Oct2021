import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean=false;
  constructor(private usrAuthSer: UserAuthService) { }

  ngOnInit(): void {
    // this.isLogged=this.usrAuthSer.isLogged(); //will execute on component load only

    // will execute, evey time subject emits new value
    this.usrAuthSer.isLoggedSubject().subscribe(loggedStatus=>{
      this.isLogged=loggedStatus;
    });
  }

}
