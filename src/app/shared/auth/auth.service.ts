import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signin } from '../interfaces/data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  // signin user create
  userSignin(data: Signin): Observable<Signin> {
    return this._httpClient.post<Signin>("http://localhost:3000/user", data);
  }
}
