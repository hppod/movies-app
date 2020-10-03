import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Diretor } from 'src/app/core/models/diretor.model';
import { DirectorsService } from 'src/app/core/services/directors.service';
import { MyToastrService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css']
})
export class DirectorDetailComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription
  Director: Diretor
  hasError: boolean = false

  constructor(
    private service: DirectorsService,
    private toastr: MyToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const directorName: String = this.activatedRoute.snapshot.params['directorName']
    this.findDirectorByName(directorName)
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  countMoviesOnDirector(nMovies: Number): String {
    return nMovies > 1 ? `${nMovies} filmes dirigidos` : `${nMovies} filme dirigido`
  }

  findDirectorByName(directorName: String): void {
    this.httpRequest = this.service.findDirectorByName(directorName).subscribe(response => {
      this.Director = response.body['data']
    }, err => {
      this.toastr.showToastrError(`${err.status} - ${err.error.message}`)
      this.hasError = true
    })
  }

  titleMoviesOnDirector(nMovies: Number): String {
    if (nMovies > 1) {
      return 'Filmes dirigidos pelo diretor'
    } else if (nMovies == 1) {
      return 'Filme dirigido pelo diretor'
    } else {
      return 'Não há filmes dirigidos pelo diretor'
    }
  }

}
