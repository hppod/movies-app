import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr"

@Injectable({
  providedIn: 'root'
})
export class MyToastrService {

  constructor(
    private _toastr: ToastrService
  ) { }

  showToastrSuccess(message: string, title: string = null, progressBar: boolean = true, positionClass: string = 'toast-bottom-center'): void {
    this._toastr.success(message, title, {
      progressBar: progressBar,
      positionClass: positionClass
    })
  }

  showToastrError(message: string, title: string = null, progressBar: boolean = true, positionClass: string = 'toast-bottom-center'): void {
    this._toastr.error(message, title, {
      progressBar: progressBar,
      positionClass: positionClass
    })
  }

}
