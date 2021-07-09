import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { AlertifyService } from 'src/services/alertify.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService,
    private router: Router, private alertify: AlertifyService) {
  }

  imgStyle: any = {
    width: "100%",
    objectFit: "cover",
    height: "500px"
  };

  productId: number = 0;

  product: any = {};

  name: string = "";
  surname: string = "";

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.productId = param["productId"];

      this.product = this.productService.GetProductById(this.productId);
    });

    this.activatedRoute.queryParams.subscribe(query => {
      this.name = query["name"];
      this.surname = query["surname"];
    });
  }
}
