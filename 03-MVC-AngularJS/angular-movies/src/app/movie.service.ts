import { Injectable } from "@angular/core";
import { Movie } from "./movie";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private moviesUrl = "api/movies"; // URL to web api

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  constructor(private http: HttpClient) {}
}
