import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Signin } from '../interfaces/data-type';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private _httpClient: HttpClient,
    private _router: Router
  ) { }

  // signin user create
  userSignin(data: Signin): Observable<Signin> {
    return this._httpClient.post<Signin>("http://localhost:3000/user", data);
  }

  userLogin(data: Login): Observable<Signin[]> {
    return this._httpClient.get<Signin[]>("http://localhost:3000/user?mobileNumber=" + data.mobileNumber + "&password=" + data.password)
  }

  isAuthenticated() {
    if (localStorage.getItem("user")) {
      this.isLoggedIn.next(true);
      this._router.navigate(["/home"]);
    }
  }
}
