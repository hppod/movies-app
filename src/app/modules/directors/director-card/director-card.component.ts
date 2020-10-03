import { Component, Input, OnInit } from '@angular/core';
import { Diretor } from 'src/app/core/models/diretor.model';

@Component({
  selector: 'app-director-card',
  templateUrl: './director-card.component.html',
  styleUrls: ['./director-card.component.css']
})
export class DirectorCardComponent implements OnInit {

  @Input() Director: Diretor

  constructor() { }

  ngOnInit(): void {
  }

  countMoviesOnDirector(nMovies: Number): String {
    return nMovies > 1 ? `${nMovies} filmes dirigidos` : `${nMovies} filme dirigido`
  }

  sliceBiography(value: String): String {
    return `${value.slice(0, 100)}...`
  }

}
