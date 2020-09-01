import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs"
import { Filme } from "./../../core/models/filme.model"
import { MoviesService } from "./../../core/services/movies.service"
import { MatDialog } from "@angular/material/dialog"
import { NewMovieComponent } from "./new-movie/new-movie.component"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription
  Filmes: Filme[]

  constructor(
    private moviesService: MoviesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAllMovies()
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  findAllMovies(): void {
    this.httpRequest = this.moviesService.findAllMovies().subscribe(response => {
      this.Filmes = response.body['data']
    }, err => {
      console.log(err)
    })
  }

  openNewMovieModal(): void {
    const dialogRef = this.dialog.open(NewMovieComponent, {
      width: '600px',
      height: '600px',
      disableClose: true
    })
  }

}
