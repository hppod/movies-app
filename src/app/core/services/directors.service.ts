import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http"
import { Observable } from "rxjs"
import { Diretor } from "./../models/diretor.model"
import { API_URL } from "./../api"

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  constructor(
    private http: HttpClient
  ) { }

  findAllDirectors(): Observable<HttpResponse<Diretor[]>> {
    return this.http.get<Diretor[]>(`${API_URL}/diretor/listarTodos`, { observe: 'response' })
  }

  createNewDirector(body: Diretor): Observable<HttpResponse<Diretor>> {
    return this.http.post<Diretor>(`${API_URL}/diretor/criar`, body, { observe: 'response' })
  }
}
