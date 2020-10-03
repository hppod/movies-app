import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"

import { MatCardModule } from "@angular/material/card"
import { FlexLayoutModule } from "@angular/flex-layout"
import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"

import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsComponent } from './directors.component';
import { ComponentsModule } from "./../../components/components.module";
import { DirectorCardComponent } from './director-card/director-card.component';
import { DirectorDetailComponent } from './director-detail/director-detail.component'
import { MoviesModule } from "./../movies/movies.module";
import { NewDirectorComponent } from './new-director/new-director.component'

@NgModule({
  declarations: [
    DirectorsComponent,
    DirectorCardComponent,
    DirectorDetailComponent,
    NewDirectorComponent
  ],
  imports: [
    CommonModule,
    DirectorsRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    ComponentsModule,
    MoviesModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class DirectorsModule { }
