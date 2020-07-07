import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Model } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerId : number;
  phone : number;
  newModel:Model[]=[];

  constructor(@Inject(forwardRef(() => CustomerService))private customerService: CustomerService) { }

  ngOnInit() {
  }

  viewDetails(){
    this.customerService.getCustomer(this.customerId).subscribe(
      data=>this.newModel = data,
    )
    
    console.log(this.customerId);
  }

  getCustomerByPhoneNo(){
    this.customerService.getCustomerByPhoneNo(this.phone).subscribe(
      data=>this.newModel = data,
    )
    this.set(this.newModel[0].custId);
  }
  set(cust_id: number) {
    console.log("haa ara h",cust_id);
    this.customerService.sharedCustomerId=cust_id;
  }

}
