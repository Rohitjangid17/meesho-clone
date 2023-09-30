import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CustomHeaderComponent } from 'src/app/core/components/custom-header/custom-header.component';

@NgModule({
    declarations: [
        ProductsComponent,
        CustomHeaderComponent
    ],
    imports: [
        HomeRoutingModule
    ],
    providers: [
        // Provide services specific to this module
    ],
})

export class ProductsModule { }