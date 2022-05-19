import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBook } from 'src/app/shared';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBooksComponent implements OnChanges {
  @Input() books: IBook[] | null = null;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<IBook>();

  displayedColumns: string[] = ['cover', 'title', 'createdAt', 'actions'];

  get loading() {
    return !this.books;
  }
  constructor() {}

  ngOnChanges({ books }: SimpleChanges): void {
    if (books && books.currentValue) this.dataSource.data = this.books!;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  sortChange(sortState: Sort) {
    if (sortState.active == 'createdAt')
      this.dataSource.data = this.dataSource.data.sort((a, b) => {
        const pervDate = new Date(a.attributes.created_at).getDate();
        const nextDate = new Date(b.attributes.created_at).getDate();
        return (
          (pervDate < nextDate ? -1 : 1) *
          (sortState.direction == 'asc' ? 1 : -1)
        );
      });
  }
}
