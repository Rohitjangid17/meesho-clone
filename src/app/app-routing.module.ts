import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  // home page router
  {
    path: "home", loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]
  },
  // product page router
  {
    path: "products", loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuard]
  },
  // category page router
  {
    path: "category", loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule), canActivate: [AuthGuard]
  },
  // signin page default router 
  {
    path: "", redirectTo: "signin", pathMatch: "full"
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
