import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormsModule,FormBuilder,Validators} from '@angular/forms';
import { Model } from '../model';

@Component({
  selector: 'app-ndew',
  templateUrl: './ndew.component.html',
  styleUrls: ['./ndew.component.css']
})
export class NdewComponent implements OnInit {

  public name = "Vishu";
  public customers = [];
  newModel:Model[]=[];
  constructor(@Inject(forwardRef(() => CustomerService))private customerService: CustomerService) { }

  customerModel = new Model();
  customerId : number;
  errMsg: string;
  successMsg: string;
  //newModel: Model;

  ngOnInit() {
    // this.customerService.getCustomer()
    // .subscribe(data => this.customers = data);
    
  }

  onSubmit(){
    this.customerService.setCustomer(this.customerModel).subscribe(
      data => {
        this.successMsg = 'Customer Added Successfully';
        this.errMsg = null;
      },
      error=>console.error('Error!',error)
    )
  }

}
