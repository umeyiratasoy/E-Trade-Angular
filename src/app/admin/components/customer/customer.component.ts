import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
declare var $:any
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService) { 
    super(spinner);
  }

  ngOnInit(): void {
    
    

  }

}