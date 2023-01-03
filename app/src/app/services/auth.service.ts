import { IUser } from './../model/user.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, of, retry, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: IUser;
  constructor(private router: Router, private http: HttpClient) {}

  setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: IUser) {
    this.http.get<IUser[]>('http://localhost:3001/users').subscribe((res) => {
      const user = res.find((person: IUser) => {
        return (
          person.email === userInfo.email &&
          person.password === userInfo.password
        );
      });
      if (user) {
        this.setToken(userInfo.email);
        alert('Login success');
        this.router.navigate(['admin' + '/' + `${user.id}`]);
        return of(true);
      } else {
        alert('User not found');
        return of(false);
      }
    });
  }

  getUserData(userId: string) {
    return this.http.get<IUser>(`http://localhost:3001/users/${userId}`);
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
    localStorage.removeItem('token');
  }
}
