import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
import { MovieResponse, MovieService } from '../services/movie.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    MatCardModule,
    HeaderComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,

  ],
})
export class HomeComponent {
  movieService = inject(MovieService);
  id = '';

  movieData?: MovieResponse;
  moviesList?: MovieResponse[] = [];

    constructor(private router: Router) {
      this.getAllMovies();
    }

  getMovie() {
    this.movieService.getMovie(this.id).subscribe((data) => {
      this.movieData = data;
    });
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe((data) => {
      this.moviesList = data;
    });
  }

  goToMovie(id: string) {
    this.router.navigate(['/movie', id]);
  }
}
