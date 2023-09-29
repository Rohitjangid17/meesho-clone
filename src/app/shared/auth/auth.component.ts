import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Login, Signin } from '../interfaces/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  formScreen: boolean = false;
  signupForm: FormGroup;
  loginForm: FormGroup;
  isSignupPassword: boolean = false;
  isLoginPassword: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    // signup form group
    this.signupForm = this._formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      mobileNumber: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });

    // login form group
    this.loginForm = this._formBuilder.group({
      mobileNumber: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
    this._authService.isAuthenticated();
  }

  // signup/create user 
  signup() {
    const userData: Signin = {
      name: this.signupForm.get("name")?.value,
      email: this.signupForm.get("email")?.value,
      mobileNumber: this.signupForm.get("mobileNumber")?.value,
      password: this.signupForm.get("password")?.value,
    }
    this._authService.userSignin(userData).subscribe((res: Signin) => {
      console.log('Signup successful', res);
      this._router.navigate(["/home"]);
      localStorage.setItem("user", JSON.stringify(res));
    }, (error) => {
      console.log('Signup failed', error);
    })
  }

  // login user
  login() {
    const userData: Login = {
      mobileNumber: this.loginForm.get("mobileNumber")?.value,
      password: this.loginForm.get("password")?.value,
    }

    this._authService.userLogin(userData).subscribe((res) => {
      console.log('Login successful', res);
      this._router.navigate(["/home"]);
      localStorage.setItem("user", JSON.stringify(res));
    }, (error) => {
      console.log('Login failed', error);
    })
  }

  // auth switch screen as signup form and login form
  authToggleScreen() {
    return this.formScreen = this.formScreen ? false : true;
  }

  // toggle signup form password
  toggleSignupPassword() {
    return this.isSignupPassword = this.isSignupPassword ? false : true;
  }

  // toggle login form password
  toggleLoginPassword() {
    return this.isLoginPassword = this.isLoginPassword ? false : true;
  }
}
