import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card"
import { FlexLayoutModule } from "@angular/flex-layout"

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class MoviesModule { }
