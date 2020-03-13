import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  currentUser: any;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('access_token');
    if (token) {
      //let jwt= JwtModule.forRoot(null);
      //this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {
   return this.http.post('/api/authenticate', JSON.stringify(credentials))
   .pipe(
    map(response => {
      let result = response;

      if (result && result['token']) {
        localStorage.setItem('token', result['token']);

        return true;
      }
      else return false;
    }));
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() {
    //return tokenNotExpired('token');
  }
}

