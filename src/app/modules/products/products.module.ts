import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        HomeRoutingModule
    ],
    providers: [
        // Provide services specific to this module
    ],
})

export class ProductsModule { }