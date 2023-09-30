import { Component, OnInit } from '@angular/core';
import { Signin } from 'src/app/shared/interfaces/data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = "";

  constructor() {
  }

  ngOnInit(): void {
    let user = localStorage.getItem("user");

    if (user) {
      this.userName = user && JSON.parse(user)[0].name;
      console.log(this.userName)
    }
  }
}
