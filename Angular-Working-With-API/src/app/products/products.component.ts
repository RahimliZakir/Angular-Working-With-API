import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { CategoryService } from 'src/services/category.service';
import { ProductsService } from 'src/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService,
    private categoryService: CategoryService) { }

  searchText: string = '';

  imgStyle: any = {
    width: "100%",
    objectFit: "cover",
    height: "250px"
  };

  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.GetProducts();

    // this.categoryService.GetCategories().subscribe(data => {
    //   console.log(data);
    // });
  }

}
