import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/models/category';
import { AlertifyService } from 'src/services/alertify.service';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private alertify: AlertifyService,
    private router: Router) { }

  category: Category = new Category();

  AddCategory(): void {
    this.categoryService.AddCategory(this.category).subscribe(success => {
      this.alertify.Success("Kateqoriya uğurla yaradıldı!");

      this.router.navigate(['/categories']);
    },
      error => {
        this.alertify.Error("Kateqoriya yaradılan zaman xəta baş verdi!");
      });
  }

  ngOnInit() {
  }

}
