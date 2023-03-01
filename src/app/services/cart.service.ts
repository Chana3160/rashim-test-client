import { Injectable } from '@angular/core';
import { TitleModel } from '../models/titleModel.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  orderList: TitleModel[] = [];
  constructor(private http: HttpClient) {}

  getOrderList() {
    return this.orderList;
  }

  addToCart(title: TitleModel) {
    this.orderList.push(title);
    alert(this.orderList);
  }
  removeItem(title: TitleModel) {
    this.orderList = this.orderList.filter(
      (item) => item.titleId != title.titleId
    );
    return this.orderList;
  }
  saveOrder() {}
}
