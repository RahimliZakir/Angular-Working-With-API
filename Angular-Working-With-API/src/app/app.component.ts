import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/services/alertify.service';

declare let alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Angular-Working-With-API';

  constructor(private alertifyService: AlertifyService) {

  }

  ngOnInit(): void {
    this.alertifyService.Success("Xoş gəlmişsiniz!");
  }
}
