import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  loggedIn: boolean = false;

  IsLoggedIn(): boolean {
    return this.loggedIn;
  }

  LogIn(loginForm: LoginForm) {


    let link: string = "http://apiforangular.az/api/account";

    this.http.post<LoginResult>(link, loginForm)
      .subscribe(
        data => {
          if (data.error == false) {
            this.loggedIn = true;
            sessionStorage.setItem('token', data.token);
          }
          else if (data.error) {
            this.loggedIn = false;
            this.alertify.Error(data.message);
          }
        },
        error => {
          this.loggedIn = false;
          sessionStorage.removeItem('token');

          if (error.status == 401) {
            this.alertify.Error("İstifadəçi adı və ya şifrə yanlışdır!");
          }
        }
      );
  }

  TimeOut() {
    this.loggedIn = false;
    sessionStorage.clear();
  }

  GetToken(): string {
    let token: string = sessionStorage.getItem('token') || '';

    return token;
  }

}

export class LoginForm {
  username!: string;
  password!: string;
}

export class LoginResult {
  error!: boolean;
  message!: string;
  token!: string;
}