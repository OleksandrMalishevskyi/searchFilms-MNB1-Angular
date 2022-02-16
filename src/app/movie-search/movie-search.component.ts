import { MovieServiceClient } from './../services/movie.service.client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  hello = 'hello from Movie Search Component';
  movies = [
    {title: 'Blade Runner 2049'},
    {title: 'Avatar'},
    {title: 'Terminator 2'},
    {title: 'Matrix'},

  ]
  constructor(private movieService: MovieServiceClient) { }

  ngOnInit(): void {
      this.movieService.findMatrixMovies()
      .then(res => this.movies = res.Search)
  }

}
