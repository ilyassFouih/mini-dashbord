import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    FullLayoutComponent,
    NavLayoutComponent,
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    SharedModule,
  ],
  exports: [NavLayoutComponent, FullLayoutComponent],
})
export class LayoutModule {}
