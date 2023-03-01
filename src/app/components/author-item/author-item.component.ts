import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../models/author.model';

import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css'],
})
export class AuthorItemComponent implements OnInit {
  @Input() author!: Author;
  // newUrl = `/:${this.author.auId}`;
  constructor(private authorsService: AuthorService) {}

  ngOnInit(): void {}
}
