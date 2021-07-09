import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ManatPipe } from 'src/pipes/manat.pipe';
import { SearchingPipe } from 'src/pipes/searching.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { CategorysearchingPipe } from 'src/pipes/categorysearching.pipe';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { LoginGuard } from 'src/guards/login.guard';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ManatPipe,
    SearchingPipe,
    CategoriesComponent,
    CategorysearchingPipe,
    CategoryDetailsComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  providers: [
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
