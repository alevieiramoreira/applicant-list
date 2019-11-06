import { Injectable } from '@angular/core';   

const apiUrl = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  constructor(){}

  getAll(){
    return{    
      "user":[
        {"id": 1,"name": "Alessandra", "email":"ale@zup.com", "phone": "123456789", "state": "São Paulo - SP"},
        {"id": 1, "name": "Hector", "email":"hector@zup.com", "phone": "123456999", "state": "São Paulo - SP"}
      ]
    }
  }
}
