import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TitleModel } from '../../models/titleModel.model';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input() book!: TitleModel;
  @Output() addItem: EventEmitter<TitleModel> = new EventEmitter();
  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  onAdd(book: TitleModel) {
    this.cartService.addToCart(book);
  }
}
