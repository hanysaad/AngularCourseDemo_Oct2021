import { Injectable } from '@angular/core';
import { from, observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationList: string[]=[];
  // private notifObservable!: Observable<string>;
  constructor() {
    this.notificationList=[
      "Don't miss our offers",
      "Wait for our White Friday offers",
      //"",
      "Shipping is free in the weekend",
      "Big sale ia coming soon...",
      "Thanks for shopping with us"
    ];
    // let counter=0;
    // this.notifObservable= new Observable<string>((observer)=>{
    //   let notifInterval=setInterval(()=>{
    //     console.log("in setInterval");
    //     if(this.notificationList[counter]=="")
    //     {
    //       observer.error("Error: Empty Notification");
    //     }

    //     if(counter>=this.notificationList.length)
    //     {
    //       observer.complete(); // Will call unsubscribe()
    //     }

    //     if(counter<this.notificationList.length)
    //     {
    //       observer.next(this.notificationList[counter]);
    //     }

    //     counter++;
    //   },2000);
    //   return {
    //     unsubscribe(){
    //       clearInterval(notifInterval);
    //     }
    //   }  
    // });
   }

   getScheduledNotifications():Observable<string>
   {
    // let obs=new Observable((observer)=>{
    //   observer.next();
    //   observer.error(); // stop observable
    //   observer.complete(); // will call unsubscribe()
      
    //   return {
    //     unsubscribe(){
    //       // 
    //     }
    //   }
    // });

    let counter=0;
    return new Observable<string>((observer)=>{
      let notifInterval=setInterval(()=>{
        console.log("in setInterval");
        if(this.notificationList[counter]=="")
        {
          observer.error("Error: Empty Notification");
        }

        if(counter>=this.notificationList.length)
        {
          observer.complete(); // Will call unsubscribe()
        }

        if(counter<this.notificationList.length)
        {
          observer.next(this.notificationList[counter]);
        }

        counter++;
      },2000);
      return {
        unsubscribe(){
          clearInterval(notifInterval);
        }
      }  
    });
   }

   getSequenceNotifications(): Observable<string>
   {
    //  const obs1=of(10,20,30);//return observable of list of values
    //  const obs2=from(this.notificationList);//return observable from array

     return from(this.notificationList);
   }
}
