import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCustomersService {

  private _url: string ="http://localhost:9090/allCustomers";

  constructor(@Inject(forwardRef(() => HttpClient))private http: HttpClient) { }

  public getAllCustomers(): Observable<any>{

    return this.http.get(this._url);
  }
}
