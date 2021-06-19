import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductsService } from 'src/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  searchText: string = '';

  imgStyle: any = {
    width: "100%",
    objectFit: "cover",
    height: "250px"
  };

  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.GetProducts();
  }

}
