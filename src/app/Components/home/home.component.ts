import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { StoreInfo } from 'src/app/Models/store-info';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  info: StoreInfo={
    name:"ITI store",
    logo:"https://picsum.photos/200/300.jpg",
    services:["Training", "Education", "Coaching", "Freelancing"]
  }

  isServicesHidden:boolean= true;
  userFeedback:string="";
  private subscriptionList: Subscription[]=[];
  constructor(private notifMsgsService: NotificationService) { }
  

  ngOnInit(): void {
    const subscriber={
      next: (msg:string)=>{ console.log(msg);},
      error: (err:string)=>{ console.log(err);},
      complete:()=>{console.log("Observer completed")}
    };
    // let sub=this.notifMsgsService.getScheduledNotifications().subscribe(subscriber);
    // let sub=this.notifMsgsService.getSequenceNotifications().subscribe(subscriber);
    let sub=this.notifMsgsService.getSequenceNotifications()
    .pipe(
      filter(elem=> elem!="Thanks for shopping with us"),
      map(elem=> "Notification: " + elem)
    )
    .subscribe(subscriber);

    // let sub=this.notifMsgsService.getScheduledNotifications().subscribe(
    //   (notifMsg)=>{
    //   alert(notifMsg);
    //   },
    //   (err)=>{
    //     alert(err);
    //   },
    //   ()=>{alert("Observer completed")}
    // );

    // this.subscriptionList.push(sub);
  };

  ngOnDestroy(): void {
    console.log("in ngonDestroy");
    for(let sub of this.subscriptionList)
      sub.unsubscribe();
  }

  toggleServices(){
    this.isServicesHidden=!this.isServicesHidden;
  }

}
