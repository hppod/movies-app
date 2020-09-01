import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http"
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

}
