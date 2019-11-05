import { Injectable } from '@angular/core';   
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/modules/list/components/users'

const apiUrl = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  constructor(private http: HttpClient){}

  getAll(): Observable<User> {
    return this.http.get<User>(apiUrl);
  }
}
