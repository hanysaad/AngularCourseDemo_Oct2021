import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdcutsComponent } from './Components/prodcuts/prodcuts.component';
import { HighligherDirective } from './Directives/highligher.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { OrderDetailsComponent } from './Components/Order/order-details/order-details.component';
// import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component'
//const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProdcutsComponent,
    HighligherDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    OrderDetailsComponent,
    NotFoundComponentComponent,
    ProductDetailsComponent,
    NewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
