import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-filter-books',
  templateUrl: './filter-books.component.html',
  styleUrls: ['./filter-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBooksComponent implements OnInit {
  @Output() filterChange: EventEmitter<string> = new EventEmitter();

  filter = '';

  constructor() {}

  ngOnInit(): void {}

  onFilterChange(filter: string) {
    this.filterChange.next(filter);
  }
}
