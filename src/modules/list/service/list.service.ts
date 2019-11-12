import { Injectable } from '@angular/core';   
import { HttpClient } from '@angular/common/http';
import { Users } from '../components/list.model';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http: HttpClient){}
  
  //variavel de apenas leitura
  private readonly apiUrl = ' http://localhost:3000/users';

  getAll() {
    return this.http.get<Users[]>(this.apiUrl)
    .pipe(
      tap(console.log) //maneira de dar log fácil 
    )
  }
}
