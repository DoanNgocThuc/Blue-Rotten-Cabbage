import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface MovieResponse {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  big_image: string;
  description: string;
  trailer: string;
  trailer_embed_link: string;
  trailer_youtube_id: string;
  genre: string[];
  director: string;
  writers: string;
  imdbid: string;
  imdb_link: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);
  private url = 'https://imdb-top-100-movies.p.rapidapi.com/';

  constructor() { }

  getMovie(id?: String) {
    return this.http.get<MovieResponse>(this.url + id, {
      headers: {
        'X-RapidAPI-key': '4b21553d2bmshfc4a8a3ba4af531p125038jsn902a8afb4267',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    });
  }

  getAllMovies() {
    return this.http.get<MovieResponse[]>(this.url, {
      headers: {
        'X-RapidAPI-key': '4b21553d2bmshfc4a8a3ba4af531p125038jsn902a8afb4267',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    });
  }
}