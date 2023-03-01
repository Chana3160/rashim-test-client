import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule, Ng2OrderPipe } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { AuthorBooksComponent } from './components/author-books/author-books.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorItemComponent,
    AuthorBooksComponent,
    BookItemComponent,
    CartComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    Ng2OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
