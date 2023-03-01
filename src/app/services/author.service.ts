import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Author } from '../models/author.model';
import { TitleModel } from '../models/titleModel.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  baseUrl = environment.url;
  authorById!: Author;
  //authors
  private authorsSubject = new BehaviorSubject<Author[]>([]);
  authors$ = this.authorsSubject.asObservable();
  //authorById
  private authorSubject = new BehaviorSubject<Author>({} as Author);
  author$ = this.authorSubject.asObservable();
  //Titles
  private titlesSubject = new BehaviorSubject<TitleModel[]>([]);
  titles$ = this.titlesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    let url = `${this.baseUrl}/Author`;
    this.http
      .get<Author[]>(url)
      .subscribe((result) => this.authorsSubject.next(result));
    return this.authors$;
  }
  getAuthorById(id: string): Observable<Author> {
    let url = `${this.baseUrl}/Author/${id}`;
    this.http
      .get<Author>(url)
      .subscribe((value) => this.authorSubject.next(value));
    return this.author$;
  }
  getBooksByAuthor(id: String): Observable<TitleModel[]> {
    let url = `${this.baseUrl}/Title/${id}`;
    this.http
      .get<TitleModel[]>(url)
      .subscribe((value) => this.titlesSubject.next(value));
    return this.titles$;
  }
}
