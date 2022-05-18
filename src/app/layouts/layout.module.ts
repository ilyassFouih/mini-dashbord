import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FullLayoutComponent, NavLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavLayoutComponent, FullLayoutComponent],
})
export class LayoutModule {}
