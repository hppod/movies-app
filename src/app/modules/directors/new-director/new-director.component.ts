import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DirectorsService } from 'src/app/core/services/directors.service';
import { MyToastrService } from 'src/app/core/services/toastr.service';
import { DirectorValidator } from 'src/app/core/validators/diretor.validator';

@Component({
  selector: 'app-new-director',
  templateUrl: './new-director.component.html',
  styleUrls: ['./new-director.component.css']
})
export class NewDirectorComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription

  directorFormGroup: FormGroup

  @ViewChild('autosize') autosize: CdkTextareaAutosize

  constructor(
    private builder: FormBuilder,
    private toastr: MyToastrService,
    private service: DirectorsService,
    private validator: DirectorValidator,
    private dialogRef: MatDialogRef<NewDirectorComponent>
  ) { }

  ngOnInit(): void {
    this.initializeDirectorForm()
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  initializeDirectorForm(): void {
    this.directorFormGroup = this.builder.group({
      nome: this.builder.control(null, [Validators.required], this.validator.validatorUniqueDirectorName()),
      biografia: this.builder.control(null),
      imagem: this.builder.control(null)
    })
  }

  directorNameExists(): boolean {
    return this.directorFormGroup.get('nome').hasError('directorNameAlreadyExists')
  }

  closeDialog(b: boolean = false): void {
    this.dialogRef.close(b)
  }

  createNewDirector(): void {
    this.httpRequest = this.service.createNewDirector(this.directorFormGroup.value).subscribe(response => {
      this.toastr.showToastrSuccess(`O diretor ${response.body['data']['nome']} foi adicionado com sucesso`)
      this.closeDialog(true)
    }, err => {
      this.toastr.showToastrError(`${err.status} - ${err.error['message']}`)
      this.closeDialog()
    })
  }

}
