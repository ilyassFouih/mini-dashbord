import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { FilterBooksComponent } from './filter-books/filter-books.component';
import { TableBooksComponent } from './table-books/table-books.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [BooksComponent, FilterBooksComponent, TableBooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule,
  ],
})
export class BooksModule {}
