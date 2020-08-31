import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const movieName = this.activatedRoute.snapshot.params['movieName']
  }

}
