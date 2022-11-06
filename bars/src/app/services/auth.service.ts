import { IUser } from './../model/user.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn!: boolean;

  constructor(private router: Router, private http: HttpClient) {}

  login(userInfo: IUser) {
    this.http.get<IUser[]>('http://localhost:3001/users').subscribe((res) => {
      const user = res.find((person: IUser) => {
        return (
          person.email === userInfo.email &&
          person.password === userInfo.password
        );
      });
      if (user) {
        this.isLoggedIn = true;
        alert('Login success');
        this.router.navigate(['admin'+'/'+`${user.id}`]);
        return of(true);
      } else {
        alert('User not found');
        return of(false);
      }
    });
  }

  signUp(userInfo: IUser) {
    this.http.get<IUser[]>('http://localhost:3001/users').subscribe((res) => {
      const user = res.find((person: IUser) => {
        return person.email === userInfo.email;
      });
      if (!user) {
        return this.http
          .post<IUser>('http://localhost:3001/users', userInfo)
          .subscribe((res) => {
            alert('Signup successful!');
            this.router.navigate(['login']);
            return of(true);
          });
      } else {
        alert('The user with this email is already registered!');
        return of(true);
      }
    });
  }

  logout() {
    this.router.navigate(['main-page']);
    this.isLoggedIn = false;
  }
}
