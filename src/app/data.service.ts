import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://handler-ooqilrkoza-uc.a.run.app'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  putData(): Observable<any> {
    return this.http.put(`${this.apiUrl}`, `{
      "name": "Mikayla",
      "comment": "",
      "continue": true,
      "phone": "303-115-9686",
      "rating": 5
    }`);
  }
}
