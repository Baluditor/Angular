import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(){
    return ['Anyu', 'Apu', 'Vivi', 'Bali'];
  }

  getPeopleCount(){
    let a = this.getPeople().length;
    return a;
  }
}
