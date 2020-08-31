import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from "./movies.component"
import { MovieDetailComponent } from "./movie-detail/movie-detail.component"

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'detail/:movieName',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
