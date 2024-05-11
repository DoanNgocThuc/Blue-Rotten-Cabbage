import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponse, MovieService } from '../services/movie.service';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    CommonModule,
    MatFabButton,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  movieService = inject(MovieService);

  id = '';
  movie?: MovieResponse;
  moviesList?: MovieResponse[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,

  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getMovie(this.id);
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe((data) => {
      this.moviesList = data;
    });
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((data) => {
      this.movie = data;
    });
  }

  goToMovie(id: string) {
    this.router.navigate(['/movie', id]);
    this.getMovie(id);
  }

  onActivate(event: any) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
