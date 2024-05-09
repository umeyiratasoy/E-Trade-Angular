import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { Create_Order } from 'src/app/contracts/order/create_order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpCLientService: HttpClientService) { }

  async create(order: Create_Order) {
    const observable: Observable<any> = this.httpCLientService.post({
      controller: "orders"
    }, order);

    await firstValueFrom(observable);
  }
}
