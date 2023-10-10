import { Component, OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Login, Signin } from '../interfaces/data-type';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// email regular expression
const emailRegex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

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
  isSigninError = new EventEmitter<boolean>(false);

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _toastrService: ToastrService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    // signup form group
    this.signupForm = this._formBuilder.group({
      name: ["", [Validators.required, this.spaceValidator]],
      email: ["", [Validators.required, Validators.pattern(emailRegex), this.spaceValidator]],
      mobileNumber: ["", Validators.required],
      password: ["", Validators.required],
    });

    // login form group
    this.loginForm = this._formBuilder.group({
      mobileNumber: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this._authService.isAuthenticated();
  }

  // space validator 
  spaceValidator(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
      return { required: true }
    }
    else {
      return null;
    }
  }

  // register user 
  register() {
    const userData: Signin = {
      name: this.signupForm.get("name")?.value,
      email: this.signupForm.get("email")?.value,
      mobileNumber: this.signupForm.get("mobileNumber")?.value,
      password: this.signupForm.get("password")?.value,
    }
    this._authService.userRegister(userData).subscribe((res: Signin) => {
      this._router.navigate(["/home"]);
      localStorage.setItem("user", JSON.stringify(res));
      this._toastrService.success('Signup Successfully');
      this._changeDetectorRef.detectChanges();
    }, (error) => {
      this._toastrService.error("Server Went Wrong");
      this._changeDetectorRef.detectChanges();
    })
  }

  // login user
  signin() {
    const userData: Login = {
      mobileNumber: this.loginForm.get("mobileNumber")?.value,
      password: this.loginForm.get("password")?.value,
    }

    this._authService.userLogin(userData).subscribe((res: Login[]) => {
      if (res && res.length) {
        localStorage.setItem("user", JSON.stringify(res));
        this._router.navigate(["/home"]);
        this._toastrService.success('Login Successfully');
        this._changeDetectorRef.detectChanges();
      } else {
        this.isSigninError.emit(true);
        this._toastrService.error("Incorrect Credentials");
      }
    }, (error) => {
      this._toastrService.error("Server Went Wrong");
      this._changeDetectorRef.detectChanges();
    });
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
