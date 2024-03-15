import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent  {
  constructor(private spinner:NgxSpinnerService) {


  }

  showSpinner(spinnerTypeName:SpinnerType) {
      this.spinner.show(spinnerTypeName);
      setTimeout(() => this.hideSpinner(spinnerTypeName), 1000); // 3sn last end
  }

  hideSpinner(spinnerTypeName:SpinnerType) {
    this.spinner.hide(spinnerTypeName);
}
}

export enum SpinnerType{
  BallAtom = "s1",
  BallScaleMultiple = "s2"  

}