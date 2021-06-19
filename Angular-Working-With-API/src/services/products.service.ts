import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: any[] = [{
    id: 1,
    title: "Samsung - 1",
    imagePath: "https://picsum.photos/200/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque vel tenetur. Nesciunt a illo dolor consectetur nam harum illum. Deleniti, natus reprehenderit. Iste eum quos harum minima odit dolore?",
    price: 15.55
  },
  {
    id: 2,
    title: "Samsung -2",
    imagePath: "https://picsum.photos/200/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque vel tenetur. Nesciunt a illo dolor consectetur nam harum illum. Deleniti, natus reprehenderit. Iste eum quos harum minima odit dolore?",
    price: 23.99
  },
  {
    id: 3,
    title: "Apple - 1",
    imagePath: "https://picsum.photos/200/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque vel tenetur. Nesciunt a illo dolor consectetur nam harum illum. Deleniti, natus reprehenderit. Iste eum quos harum minima odit dolore?",
    price: 177.82
  },
  {
    id: 4,
    title: "Apple - 2",
    imagePath: "https://picsum.photos/200/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque vel tenetur. Nesciunt a illo dolor consectetur nam harum illum. Deleniti, natus reprehenderit. Iste eum quos harum minima odit dolore?",
    price: 65.4321
  }];

  GetProducts(): Product[] {
    return this.products;
  }

  GetProductById(id: number): Product {
    return this.products.filter(prod => prod.id == id)[0];
  }

}
