import { Component } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeader {
  title = 'applicant-list';

  constructor(
    private headerService: HeaderService // injeção de dependência
  ) {}

  getAll(){
    this.headerService.getAll();
  }
}

