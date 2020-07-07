import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from './model';
import { Product } from 'product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _url: string ="http://localhost:9090/addCustomer";
  _urlnew: string ="http://localhost:9090/customers/";
  phoneUrl : string = "http://localhost:9090/loginCustomers/";
  loginUrl : string = "http://localhost:9090/loginCustomersActual/";
  _urlAddProduct: string ="http://localhost:9090/addProduct";
  _urlGetProductByCustId: string ="http://localhost:9090/products/";
  sharedCustomerId: number;
  

  constructor(@Inject(forwardRef(() => HttpClient))private http: HttpClient) { }

  public getCustomer(customerId:number): Observable<any>{

    return this.http.get(this._urlnew + customerId);

    // return [
    //   {"id":1,"name":"vishu","age":26},
    //   {"id":2,"name":"aman","age":24},
    //   {"id":3,"name":"kunal","age":27},
    //   {"id":4,"name":"naman","age":26}
    // ];
  }

  public setCustomer(cust: Model){

   return this.http.post<any>(this._url,cust);

  }

  public getCustomerByPhoneNo(phone:number): Observable<any>{

    return this.http.get(this.phoneUrl + phone);

  }

  public login(phoneNo:number): Observable<any>{

    return this.http.get(this.loginUrl + phoneNo);
  }

  public setProduct(product: Product){

    return this.http.post<any>(this._urlAddProduct,product);
 
   }

   public getProductByCustId(sharedCustomerId:number): Observable<any>{
    console.log("inside getProducts of service",sharedCustomerId);
    return this.http.get(this._urlGetProductByCustId + sharedCustomerId);
    
   }
  
}
