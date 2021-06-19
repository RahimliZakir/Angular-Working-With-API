import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/models/product';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(product: Product[], searchText: string): Product[] {
    searchText = searchText.toLowerCase();

    return product.filter(prod => prod.title.toLowerCase().indexOf(searchText) != -1);
  }

}
