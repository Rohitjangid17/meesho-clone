import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // home page default router 
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  // home page router
  {
    path: "home", loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  // product page router
  {
    path: "products", loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  // category page router
  {
    path: "category", loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
  },
  // auth page router
  {
    path: "signin", loadChildren: () => import('./shared/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
