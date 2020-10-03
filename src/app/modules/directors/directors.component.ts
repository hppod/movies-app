import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Diretor } from 'src/app/core/models/diretor.model';
import { DirectorsService } from 'src/app/core/services/directors.service';
import { MyToastrService } from 'src/app/core/services/toastr.service';
import { NewDirectorComponent } from './new-director/new-director.component';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription

  directors: Diretor[]
  hasError: boolean = false

  constructor(
    private service: DirectorsService,
    private toastr: MyToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAllDirectors()
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  findAllDirectors(): void {
    this.httpRequest = this.service.findAllDirectors().subscribe(response => {
      this.directors = response.body['data']
    }, err => {
      this.hasError = true
      this.toastr.showToastrError(`${err.status} - ${err.error.message}`)
    })
  }

  openNewDirectorModal(): void {
    const dialogRef = this.dialog.open(NewDirectorComponent, {
      disableClose: true,
      width: '600px',
      height: '600px'
    })

    dialogRef.afterClosed().subscribe(newDirectorAdded => {
      if (newDirectorAdded) {
        this.directors = undefined
        this.findAllDirectors()
      }
    })
  }

}
