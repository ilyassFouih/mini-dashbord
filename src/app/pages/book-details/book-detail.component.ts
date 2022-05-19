import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { BOOKS, IBook } from 'src/app/shared';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent implements OnInit {
  book: IBook | null = null;

  get loading() {
    return !this.book;
  }
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        map((id) => BOOKS.data.find((item) => item.id === id)),
        filter((book) => !!book)
      )
      .subscribe((book) => (this.book = <IBook>book));
  }
}
