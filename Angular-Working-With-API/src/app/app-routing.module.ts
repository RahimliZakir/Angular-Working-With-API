import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/guards/login.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "product/:productId", component: ProductDetailsComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "category/:categoryId", component: CategoryDetailsComponent, canActivate: [LoginGuard] },
  { path: "categories/add", component: AddCategoryComponent, canActivate: [LoginGuard] },
  { path: "category/edit/:categoryId", component: EditCategoryComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: "categories", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
