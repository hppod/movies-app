import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card"

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';


@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule
  ]
})
export class MoviesModule { }
