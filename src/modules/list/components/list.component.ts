import { Component, OnInit } from '@angular/core';
import { Users } from './list.model'
import { ListService } from '../service/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ ListService ]
})

export class ListComponent implements OnInit{

    users: Users[];

    constructor(private listService: ListService) { }

    ngOnInit(){
      this.listService.getAll()
      .subscribe(data => this.users = data);
    }


    
}

