import { Component} from '@angular/core';
import { ListService } from '../service/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent{
    title = 'applist';
    
    users: any

    constructor(private listService: ListService) { 
       this.users = this.getAll();
    }
     
    getAll(){
        const data = this.listService.getAll();
        return data.user
    }
}

