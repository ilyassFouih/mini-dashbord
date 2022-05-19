import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { delay, from, of, take, timer } from 'rxjs';
import { BOOKS, IBook } from 'src/app/shared';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  filteredBooks: IBook[] | null = null;

  allBooks: IBook[] = BOOKS.data;

  constructor(
    private booksService: BooksService,
    private cdk: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.booksService.loadBooks().subscribe((books) => {
      this.filteredBooks = books;
      this.cdk.markForCheck();
    });
  }

  onFilterTermChange(term: string) {
    if (term) {
      this.filteredBooks = null;
      this.filteredBooks = this._decouple(
        this.allBooks.filter((item) =>
          item.attributes.content
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase())
        )
      );
    } else this.filteredBooks = this._decouple(this.allBooks);
  }

  private _decouple(books: IBook[]) {
    return <IBook[]>JSON.parse(JSON.stringify(books));
  }
}
