import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  /* selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }*/

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => (this.movies = movies));
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }
}
