import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

import { AuthComponent } from "./auth.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        AuthRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [],
})

export class AuthModule { }