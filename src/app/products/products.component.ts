import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Product } from 'product';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productModel = new Product();
  customerId:number;
  errMsg: string;
  successMsg: string;

  constructor(@Inject(forwardRef(() => CustomerService))private customerService: CustomerService) { }

  ngOnInit() {
    this.customerId=this.getShared();
    console.log(this.customerId);
    this.productModel.customerId=this.customerId;
  }

  onSubmit(){
    this.customerService.setProduct(this.productModel).subscribe(
      data => {
        this.successMsg = 'Product Added Successfully';
        this.errMsg = null;
      },
      error=>console.error('Error!',error)
    )
    
  }

  getShared(): number{
    return this.customerService.sharedCustomerId;
  }
}
