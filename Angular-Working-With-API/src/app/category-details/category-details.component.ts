import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute) {
  }

  categoryId: number = 0;

  category: any = {};

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.categoryId = param["categoryId"];
      this.categoryService.GetCategoryById(this.categoryId).subscribe(data => {
        this.category = data;
      });
    });
  }

}
