import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Signin } from '../interfaces/data-type';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  formScreen: boolean = false;
  signupForm: FormGroup;
  loginForm: FormGroup;
  isSignupPassword: boolean = false;
  isLoginPassword: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {
    // signup form group
    this.signupForm = this._formBuilder.group({
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

  // signup/create user 
  signup() {
    const userData: Signin = {
      email: this.signupForm.get("email")?.value,
      mobileNumber: this.signupForm.get("mobileNumber")?.value,
      password: this.signupForm.get("password")?.value,
    }
    this._authService.userSignin(userData).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }

  // login user
  login() {
    console.log(this.loginForm.value);
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
