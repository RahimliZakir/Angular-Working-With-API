import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/models/category';
import { AlertifyService } from 'src/services/alertify.service';
import { CategoryService } from 'src/services/category.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService, private alertify: AlertifyService,
    private activatedRoute: ActivatedRoute, private loginServie: LoginService) { }

  searchText: string = '';

  categories: Category[] = [];

  ml: string = "5px";

  addBtnStyle: any = {
    display: "inline-block",
    fontSize: "3.4rem",
    fontWeight: "600",
    padding: "0px 9.5px 3px 9.5px",
    margin: "10px 0"
  };
  
  RemoveCategory(category: Category): void {
    this.categoryService.DeleteCategory(category.id).subscribe(success => {
      this.alertify.Success(`${category.name} adlı kateqoriya uğurla silindi!`);

      setTimeout(() => {
        window.location.reload();
      }, 500);
    },
      error => {
        this.alertify.Error("Kateqoriyanı silmək mümkün olmadı!");

        this.loginServie.TimeOut();
      });
  }

  ngOnInit() {
    this.categoryService.GetCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
