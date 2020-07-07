import { Injectable, Inject, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url: string ="http://localhost:9090/loginCustomers/";

  constructor(@Inject(forwardRef(() => HttpClient))private http: HttpClient) { }

  public login(phoneNo:number): Observable<any>{

    return this.http.get(this._url + phoneNo);
  }
}
