import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Product } from 'product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product[]=[];
  sharedCustId:number;

  constructor(@Inject(forwardRef(() => CustomerService))private customerService: CustomerService) { }

  ngOnInit() {
    this.viewProduct();
  }

  viewProduct(){
    this.customerService.getProductByCustId(this.customerService.sharedCustomerId).subscribe(
      data=>this.product = data,
    )

    console.log("inside view product of product component");

}
}
