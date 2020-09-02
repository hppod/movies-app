import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
// import { CdkTextareaAutosize } from "@angular/cdk/text-field"
import { Subscription } from "rxjs"
import { Diretor } from "./../../../core/models/diretor.model"
import { DirectorsService } from "./../../../core/services/directors.service"
import { MyToastrService } from "./../../../core/services/toastr.service"

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription

  directorFormGroup: FormGroup
  isNewDirector: boolean = false
  diretores: Diretor[]
  stepDirectorLabel: String = 'Diretor'

  // @ViewChild('autosize') autosize: CdkTextareaAutosize

  constructor(
    private directorsService: DirectorsService,
    private builder: FormBuilder,
    private toastr: MyToastrService
  ) { }

  ngOnInit(): void {
    this.findAllDirectors()
    this.initializeSelectDirectorFormGroup()
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  findAllDirectors(): void {
    this.httpRequest = this.directorsService.findAllDirectors().subscribe(response => {
      this.diretores = response.body['data']
    }, err => {
      console.log(err.error['message'])
    })
  }

  initializeSelectDirectorFormGroup(): void {
    this.directorFormGroup = this.builder.group({
      diretor: this.builder.control(null, [Validators.required])
    })
  }

  initializeNewDirectorFormGroup(): void {
    this.directorFormGroup = this.builder.group({
      nome: this.builder.control(null, [Validators.required]),
      imagem: this.builder.control(null),
      biografia: this.builder.control(null)
    })
  }

  newDirector(): void {
    this.isNewDirector = !this.isNewDirector
    this.initializeNewDirectorFormGroup()
  }

  selectDirector(): void {
    this.isNewDirector = !this.isNewDirector
    this.findAllDirectors()
    this.initializeSelectDirectorFormGroup()
  }

  nextStep(): void {
    if (this.isNewDirector) {
      this.createNewDirector(this.directorFormGroup.value)
    } else {
      //definir o ID no formulário de filme
      this.stepDirectorLabel = `Diretor: ${this.directorFormGroup.value['diretor']['nome']}`
    }
  }

  createNewDirector(formValueDirector: Diretor): void {
    this.httpRequest = this.directorsService.createNewDirector(formValueDirector).subscribe(response => {
      //definir o ID no formulário de filme
      this.stepDirectorLabel = `Diretor: ${response.body['data']['nome']}`
      this.toastr.showToastrSuccess(`O diretor ${response.body['data']['nome']} foi adicionado com sucesso`)
    }, err => {
      this.toastr.showToastrError(`${err.error['message']}`)
    })
  }

}
