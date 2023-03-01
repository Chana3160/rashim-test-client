import { Component, OnInit, EventEmitter } from '@angular/core';
import { TitleModel } from 'src/app/models/titleModel.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  orderList!: TitleModel[];
  total: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.orderList = this.cartService.getOrderList();
    this.setTotal();
  }
  deleteItem(book: TitleModel) {
    if (this.orderList.length == 1) {
      this.total = 0;
    } else this.total = this.total - book.price;
    this.orderList = this.cartService.removeItem(book);
  }

  setTotal() {
    this.orderList.map((e) => (this.total = this.total + e.price));
  }
}
