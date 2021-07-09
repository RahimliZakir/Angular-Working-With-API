import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/category';
import { AlertifyService } from 'src/services/alertify.service';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService, private router: Router) { }

  toLeft: string = "10px";

  category: Category = new Category();

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      let categoryId = param["categoryId"];

      this.categoryService.GetCategoryById(categoryId).subscribe(data => {
        this.category = data;
      });
    });
  }

  EditCategory(): void {
    this.categoryService.EditCategory(this.category).subscribe(
      success => {
        this.alertify.Success("Uğurla yeniləndi!");

        this.router.navigate(["/categories"]);
      },
      error => {
        this.alertify.Error("Yenilənmə zamanı xəta baş verdi!");
      });
  }
}
