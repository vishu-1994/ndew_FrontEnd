import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NdewComponent } from './ndew/ndew.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { AllcustomersComponent } from './allcustomers/allcustomers.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: 'registration', component: NdewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customerDetails', component: CustomerDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allCustomersData', component: AllcustomersComponent },
  { path: 'addProduct', component: ProductsComponent },
  { path: 'productDetails', component: ProductDetailsComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
