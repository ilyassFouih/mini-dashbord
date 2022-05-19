import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailsRoutingModule } from './book-details-routing.module';
import { BookDetailComponent } from './book-detail.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BookDetailComponent],
  imports: [
    CommonModule,
    BookDetailsRoutingModule,
    MatCardModule,
    SharedModule,
  ],
})
export class BookDetailsModule {}
