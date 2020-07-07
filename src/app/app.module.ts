import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NdewComponent } from './ndew/ndew.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { AllcustomersComponent } from './allcustomers/allcustomers.component';
import { AllCustomersService } from './allcustomers/all-customers.service';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NdewComponent,
    LoginComponent,
    CustomerDetailsComponent,
    HomeComponent,
    AllcustomersComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [CustomerService,AllCustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
