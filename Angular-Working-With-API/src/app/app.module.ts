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

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ManatPipe,
    SearchingPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
