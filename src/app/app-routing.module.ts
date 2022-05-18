import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { NavLayoutComponent } from './layouts/nav-layout/nav-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () =>
          import('./pages/landing/landing.module').then((m) => m.LandingModule),
      },
    ],
  },
  {
    path: 'dash',
    component: NavLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full',
      },
      {
        path: 'books',
        loadChildren: () =>
          import('./pages/books/books.module').then((m) => m.BooksModule),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./pages/book-details/book-details.module').then(
            (m) => m.BookDetailsModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
