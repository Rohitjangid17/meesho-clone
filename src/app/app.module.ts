import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthComponent } from './shared/auth/auth.component';
import { AuthModule } from './shared/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
