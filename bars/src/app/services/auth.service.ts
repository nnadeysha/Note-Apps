import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn!: boolean
  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  /* isLoggedIn() {
    return this.getToken() !== null;
  } */

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if (this.getToken() === (userInfo.email+'&'+userInfo.password)){
      this.isLoggedIn = true;
      return of(true)
    }
    return throwError(() => new Error('Failed Login'))
  }

  signUp(userInfo: {email: string, password: string}) {
    if(this.getToken() !== (userInfo.email+'&'+userInfo.password)){
      this.setToken(userInfo.email+'&'+userInfo.password)
      this.isLoggedIn = true;
      return of(true)
    }

    return throwError(() => new Error('Failed Login'))
  }

  logout() {
    this.router.navigate(['main-page']);
    this.isLoggedIn = false
  }
}
