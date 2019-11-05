import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { Observable } from 'rxjs';
import { User } from './users';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class AppList implements OnInit{
    title = 'applist';
    
    constructor(private listService: ListService) { }
    
    users: Observable<User>;

    ngOnInit(){
        this.getAll();
    }

    getAll(){
        const data = this.listService.getAll();
        JSON.stringify(data);
        this.users = data;
    }
}

