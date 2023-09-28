import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';

import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        AuthRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        ReactiveFormsModule,
        MatIconModule
    ],
    providers: [],
})

export class AuthModule { }