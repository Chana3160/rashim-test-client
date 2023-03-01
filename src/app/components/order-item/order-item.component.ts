import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TitleModel } from 'src/app/models/titleModel.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})
export class OrderItemComponent implements OnInit {
  @Input() book!: TitleModel;
  @Output() remove: EventEmitter<TitleModel> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onRemove(book: TitleModel) {
    this.remove.emit(book);
  }
}
