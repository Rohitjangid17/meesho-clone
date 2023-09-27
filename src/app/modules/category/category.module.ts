import { NgModule } from '@angular/core';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';

@NgModule({
    declarations: [
        CategoryComponent
    ],
    imports: [
        CategoryRoutingModule
    ],
    providers: [
        // Provide services specific to this module
    ],
})

export class CategoryModule { }