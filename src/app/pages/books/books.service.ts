import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { BOOKS } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  loadBooks() {
    return of(BOOKS.data).pipe(delay(500));
  }
}
