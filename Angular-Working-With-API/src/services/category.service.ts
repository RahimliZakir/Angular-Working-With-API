import { Injectable } from '@angular/core';
import { Category } from 'src/models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  apiLink: string = "http://apiforangular.az/api/categories";

  constructor(private http: HttpClient, private loginService: LoginService) { }

  GetCategories(): Observable<Category[]> {
    let link: string = `${this.apiLink}`;
    let token: string = this.loginService.GetToken();


    return this.http.get<Category[]>(link, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  GetCategoryById(id: number): Observable<Category> {
    let link: string = `${this.apiLink}/${id}`;
    let token: string = this.loginService.GetToken();

    return this.http.get<Category>(link, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  AddCategory(category: Category): Observable<Category> {
    let link: string = `${this.apiLink}`;
    let token: string = this.loginService.GetToken();

    return this.http.post<Category>(link, category, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  EditCategory(category: Category): Observable<Category> {
    let link: string = `${this.apiLink}/${category.id}`;
    let token: string = this.loginService.GetToken();

    return this.http.put<Category>(link, category, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  DeleteCategory(id: number): Observable<Category> {
    let link: string = `${this.apiLink}/${id}`;
    let token: string = this.loginService.GetToken();

    return this.http.delete<Category>(link, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
