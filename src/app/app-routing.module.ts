import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { ProdcutsComponent } from './Components/prodcuts/prodcuts.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

//First-match wins.
const routes: Routes = [
  //{path:'', component:HomeComponent}, //Default path
  {path:'', redirectTo:'/Home', pathMatch:'full'}, //Default path
  {path:'Home', component: HomeComponent},
  {path:'Products', component: ProdcutsComponent},
  {path:'Product/:pid', component: ProductDetailsComponent},
  {path:'Order', component: OrderMasterComponent},
  {
    path: 'User', 
    loadChildren: () => import('./Components/user/user.module')
      .then(m=>m.UserModule)
  },
  {path:'**',component:NotFoundComponentComponent} //Wildcard path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
