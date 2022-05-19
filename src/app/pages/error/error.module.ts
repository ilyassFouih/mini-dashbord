import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [ErrorComponent],
})
export class ErrorModule {}
