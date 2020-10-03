import { Injectable } from "@angular/core"
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http"
import { Observable, throwError } from "rxjs"
import { catchError } from "rxjs/operators"
import { MyToastrService } from "./../services/toastr.service"

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private toastr: MyToastrService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([0, 500].indexOf(err.status) !== -1) {
                this.toastr.showToastrError('Serviço indisponível')
            }
            const error = err.error.message || err.statusText
            return throwError(error)
        }))
    }
}