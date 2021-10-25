import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './user-auth.guard';


const routes: Routes=[
  {path: 'Profile', component:UserProfileComponent, 
    canActivate:[UserAuthGuard]},
  {path: 'Login', component:UserLoginComponent},
  {path:'', redirectTo:'/User/Profile', pathMatch:'full'}
];

@NgModule({
  declarations: [
    UserProfileComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }

