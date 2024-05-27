import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';
import { DialogService } from 'src/app/services/common/dialog.service';
import { QrcodeReadingDialogComponent } from 'src/app/dialogs/qrcode-reading-dialog/qrcode-reading-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService, private dialogService: DialogService) {
    super(spinner)
  }
  
  ngOnInit(): void {
    
    
    // this.httpClientService.get(
    //   {
    //     controller:"products"
    //   }).subscribe(data => console.log(data));

      // this.httpClientService.post(
      //   {
      //     controller:"products"
      //   }, {
      //     name:"kalem",
      //     stock:10,
      //     price:15
      //   }).subscribe();

      // this.httpClientService.put({
      //   controller:"products"
      // }, {
      //   id: "b579251f-bd5c-4a98-afd5-440669496709",
      //   name:"atasoy",
      //   stock:1550,
      //   price:15.5
      // }).subscribe();

      // this.httpClientService.delete( {
      //   controller:"products"
      // },
      //   "6a167dea-d31f-475f-9007-de560f128833",
      // )
      //   .subscribe();

      // this.httpClientService.get ( {
      //     baseUrl:"https://jsonplaceholder.typicode.com",
      //     controller:"posts"
      // }).subscribe(data => console.log(data))


  }
  @ViewChild(ListComponent) listcomponents : ListComponent
    createdProduct(createdProduct : Create_Product) {
      this.listcomponents.getProducts();
    }

    showProductQrCodeReading() {
      this.dialogService.openDialog({
        componentType: QrcodeReadingDialogComponent,
        data: null,
        options: {
          width: "1000px"
        },
        afterClosed: () => { }
      });
    } 

}
