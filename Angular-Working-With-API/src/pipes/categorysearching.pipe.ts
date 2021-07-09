import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/models/category';

@Pipe({
  name: 'categorysearching'
})
export class CategorysearchingPipe implements PipeTransform {

  transform(category: Category[], searchText: string): Category[] {
    searchText = searchText.toLowerCase();

    return category.filter(c => c.name.toLowerCase().indexOf(searchText) != -1);
  }
}
