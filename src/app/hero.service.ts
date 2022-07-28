import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Hero } from './hero';
import * as heros from './mock-heroes';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }

  getHeroes():Observable<Hero[]>{
    const heroes = of(heros.HEROES);
    this.messageService.add('HeroService:fetched heroes');
    return heroes;
  }
}

// import {HEROES} from './mock-heroes';
// heroes = hero.HEROES;