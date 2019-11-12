import { Component } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'applicant-list';

  constructor(
    private headerService: HeaderService // injeção de dependência
  ) {}

  getAll(){
    this.headerService.getAll();
  }
}

