import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private _formBuilder: FormBuilder
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

  signup() {
    console.log(this.signupForm.value);
  }

  login() {
    console.log(this.loginForm.value);
  }

  authToggleScreen() {
    return this.formScreen = this.formScreen ? false : true;
  }

  toggleSignupPassword() {
    return this.isSignupPassword = this.isSignupPassword ? false : true;
  }

  toggleLoginPassword() {
    return this.isLoginPassword = this.isLoginPassword ? false : true;
  }
}
