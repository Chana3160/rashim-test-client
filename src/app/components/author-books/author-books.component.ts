import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TitleModel } from '../../models/titleModel.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.css'],
})
export class AuthorBooksComponent implements OnInit {
  sub: any;
  authorId!: string;
  author!: any;
  books!: Observable<TitleModel[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authorsService: AuthorService
  ) {}

  ngOnInit(): void {
    let authorId = String(this.activatedRoute.snapshot.paramMap.get('id'));
    if (authorId) {
      this.author = this.authorsService
        .getAuthorById(authorId)
        .subscribe((value) => (this.author = value));
      this.books = this.authorsService.getBooksByAuthor(authorId);
    }
  }
  key: string = '';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
