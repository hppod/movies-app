import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs"
import { MoviesService } from "./../../../core/services/movies.service"
import { Filme } from "./../../../core/models/filme.model"

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription
  Filme: Filme

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    const movieName = this.activatedRoute.snapshot.params['movieName']
    this.findMovieByName(movieName)
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  findMovieByName(movieName: String): void {
    this.httpRequest = this.moviesService.findMovieByName(movieName).subscribe(response => {
      this.Filme = response.body['data']
    }, err => {
      console.log(err)
    })
  }

}
