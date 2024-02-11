import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {DataService} from './data.service';
import {MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  getResponseData: any;
  putResponseData: any;

  constructor(private dataService: DataService) {}

  getData() {
    this.dataService.getData().subscribe(
      (data) => {
        this.getResponseData = data;
      },
      (error) => {
        console.error('Error getting data:', error);
      },
    );
  }

  putData() {
    this.dataService.putData().subscribe(
      (data) => {
        this.putResponseData = data;
      },
      (error) => {
        console.error('Error putting data:', error);
      },
    );
  }
}
