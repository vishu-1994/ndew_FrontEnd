import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Model } from '../model';
import { AllCustomersService } from './all-customers.service';

@Component({
  selector: 'app-allcustomers',
  templateUrl: './allcustomers.component.html',
  styleUrls: ['./allcustomers.component.css']
})
export class AllcustomersComponent implements OnInit {

  newModel:Model[]=[];

  constructor(@Inject(forwardRef(() => AllCustomersService))private allCustomersService: AllCustomersService) { }

  ngOnInit() {
    this.allCustomers();
  }

  allCustomers(){
    this.allCustomersService.getAllCustomers().subscribe(
      data=>this.newModel = data,
    )
    console.log(this.newModel);
  }

}
