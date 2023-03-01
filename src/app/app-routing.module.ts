import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorBooksComponent } from './components/author-books/author-books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/cart', component: CartComponent },
  { path: 'authors/:id', component: AuthorBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
