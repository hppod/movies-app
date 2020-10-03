import { Component, OnInit, Input } from '@angular/core';
import { Filme } from "./../../../core/models/filme.model"

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() Filme: Filme
  @Input() showHeader: boolean = true
  @Input() showSynopsis: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  sliceSnyposis(value: String): String {
    return `${value.slice(0, 100)}...`
  }

}
