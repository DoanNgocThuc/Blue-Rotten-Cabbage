import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";
  hide = true;

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    if(this.username === '') {
      this.errorMsg = "Username is required";
      console.log("Missing username");
      return;
    } else if(this.password === '') {
      this.errorMsg = "Password is required";
      console.log("Missing password");
      return;
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.username, this.password);
      if(res === 200) {
        this.router.navigate(['home']);
        console.log("Login successful");
      }
      if(res === 403) {
        this.errorMsg = "Invalid credentials";
      }
    }
  }
}

