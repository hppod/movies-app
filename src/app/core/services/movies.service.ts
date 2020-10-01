import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filme } from "./../models/filme.model"
import { API_URL } from "./../api"

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  findAllMovies(): Observable<HttpResponse<Filme[]>> {
    return this.http.get<Filme[]>(`${API_URL}/filme/listarTodos`, { observe: 'response' })
  }

  findMovieByName(movieName: String): Observable<HttpResponse<Filme>> {
    return this.http.get<Filme>(`${API_URL}/filme/listarUm/${movieName}`, { observe: 'response' })
  }

  createNewMovie(body: Filme): Observable<HttpResponse<Filme>> {
    return this.http.post<Filme>(`${API_URL}/filme/criar`, body, { observe: 'response' })
  }

  validatorUniqueMovieName(movieName: string) {
    let myParams = new HttpParams()
    myParams = myParams.append('nome', movieName)
    return this.http.get<any>(`${API_URL}/filme/validarNomeFilme`, { params: myParams })
  }

}
