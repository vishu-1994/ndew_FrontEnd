import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './Login';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phoneNo : number;
  errorMsg: string;
  loginForm: FormGroup;
  submit: boolean;
  loginVar = new Login();
  constructor(@Inject(forwardRef(() => CustomerService))private customerService: CustomerService,
  private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.customerService.login (this.phoneNo).subscribe(
      data=>{
        if (data) {
          console.log("logged in");
        }

      }
    )
    console.log('login successful');
  }

}
