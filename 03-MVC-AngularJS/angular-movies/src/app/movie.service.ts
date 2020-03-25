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

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    //get the array of movies
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovie(id: number): Observable<Movie> {
    //get the movie selected
    const url = `${this.moviesUrl}/${id}`;

    return this.http.get<Movie>(url);
  }

  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions);
  }

  /** delete the movie from the server */
  deleteMovie(movie: Movie | number): Observable<Movie> {
    const id = typeof movie === "number" ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;

    return this.http.delete<Movie>(url, this.httpOptions);
  }
  /*add a new movie to the server*/
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions);
  }
}
