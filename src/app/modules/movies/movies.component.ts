import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs"
import { Filme } from "./../../core/models/filme.model"
import { MoviesService } from "./../../core/services/movies.service"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription
  Filmes: Filme[]

  constructor(
    private moviesService: MoviesService
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
      console.log(this.Filmes)
    }, err => {
      console.log(err)
    })
  }

}
