import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getAll(){
    return {   "user":[
        {"id": 1, "photoUrl": "", "name": "Alessandra", "email":"ale@zup.com", "phone": "123456789", "state": "São Paulo - SP"},
        {"id": 1, "photoUrl": "", "name": "Hector", "email":"hector@zup.com", "phone": "123456999", "state": "São Paulo - SP"}
      ]
    };
  }
}
