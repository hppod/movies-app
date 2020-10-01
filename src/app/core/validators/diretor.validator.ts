import { Injectable } from "@angular/core"
import { AsyncValidatorFn } from "@angular/forms"
import { map, debounceTime, distinctUntilChanged, switchMap, first } from "rxjs/operators"
import { DirectorsService } from "./../services/directors.service"

@Injectable({
    providedIn: 'root'
})
export class DirectorValidator {

    constructor(
        private directorsService: DirectorsService
    ) { }

    validatorUniqueDirectorName(): AsyncValidatorFn {
        return control => control.valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(value => this.directorsService.validatorUniqueDirectorName(value)),
                map((response) => {
                    if (response['data'] == 0 && control.value != null && control.value != '') {
                        return null
                    } else {
                        return { 'directorNameAlreadyExists': true }
                    }
                }),
                first()
            )
    }

}