import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'meesho-clone';

  constructor(
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 5000);
    this.ngxService.startBackground("do-background-things");
    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01");
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01");
    }, 5000);
  }
}
