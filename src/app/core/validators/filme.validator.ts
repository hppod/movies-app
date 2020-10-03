import { Injectable } from "@angular/core"
import { AsyncValidatorFn } from "@angular/forms"
import { map, debounceTime, distinctUntilChanged, switchMap, first } from "rxjs/operators"
import { MoviesService } from "./../services/movies.service"

@Injectable({
    providedIn: 'root'
})
export class MovieValidator {

    constructor(
        private moviesService: MoviesService
    ) { }

    validatorUniqueMovieName(): AsyncValidatorFn {
        return control => control.valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(value => this.moviesService.validatorUniqueMovieName(value)),
                map((response) => {
                    if (response['data'] == 0 && control.value != null && control.value != '') {
                        return null
                    } else {
                        return { 'movieNameAlreadyExists': true }
                    }
                }),
                first()
            )
    }

}