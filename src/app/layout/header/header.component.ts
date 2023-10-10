import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signin } from 'src/app/shared/interfaces/data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = "";

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._router.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem("user")) {
          const user = localStorage.getItem("user");
          const userData = user && JSON.parse(user)[0];

          // get username
          this.userName = userData.name;
          console.log(this.userName);
        }
      }
    })
  }
}
