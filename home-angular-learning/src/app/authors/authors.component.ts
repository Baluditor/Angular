import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  template: `
    <h2>{{numberOfAuthors + " " + title}}</h2>
    <ul>
      <li *ngFor="let author of authors">
        {{author}}
      </li>
    </ul>
  `
})
export class AuthorsComponent implements OnInit {
  title = "Authors";
  authors;
  numberOfAuthors;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
    this.numberOfAuthors = service.getNumberOfAuthors();
  }
      
  ngOnInit() {
  }

}
