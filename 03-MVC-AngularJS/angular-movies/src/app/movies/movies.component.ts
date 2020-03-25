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

  add(name: string, gen: string, dur: number, yearr: number, plot: string) {
    const aux = {
      title: name,
      genre: gen,
      duration: dur,
      year: yearr,
      description: plot
    };

    this.movieService
      .addMovie(aux as Movie)
      .subscribe(movie => this.movies.push(movie));
  }

  // dropdown form with the button
  public show: boolean = false;
  public buttonName: string = "Show";

  showAdd() {
    this.show = !this.show;
    //change the name of the button
    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Add Movie";
  }
}
