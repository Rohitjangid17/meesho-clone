import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  formScreen: boolean = false;

  authToggleScreen() {
    return this.formScreen = this.formScreen ? false : true;
  }
}
