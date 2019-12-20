import { Component } from '@angular/core';
import { CoursesServices } from './courses.service';
@Component({
    selector: 'courses', // <div calss="courses"> ".courses"
    template: `
        <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{course}}
                </li>
            </ul>
        `
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    // getTitle() {
        // return this.title;
    // }

    constructor(){
        let service = new CoursesServices();
        this.courses = service.getCourses();
    }
}
