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
  responseData: any;

  constructor(private dataService: DataService) {}

  getData() {
    this.dataService.getData().subscribe(
      (data) => {
        this.responseData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      },
    );
  }
}
