import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  jwt = new JwtHelperService();
  currentUser: any;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('access_token');
    if (token) {
      this.currentUser = this.jwt.decodeToken(token);
    }
  }

  login(credentials) {
   return this.http.post('/api/authenticate', JSON.stringify(credentials))
   .pipe(
    map(response => {
      let result = response;

      if (result && result['access_token']) {
        localStorage.setItem('access_token', result['access_token']);

        return true;
      }
      else return false;
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
    this.currentUser = null;
  }

  isLoggedIn() {
    let token = localStorage.getItem("access_token");

    if (token)
    return !this.jwt.isTokenExpired(token);

    return false;
  }
}

