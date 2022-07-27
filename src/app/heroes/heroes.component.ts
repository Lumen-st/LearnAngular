import { Component, OnInit } from '@angular/core';
import * as hero from '../mock-heroes'
// import { Hero } from '../hero';
// import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes: HEROES;
  heroes = hero.HEROES;

  constructor() { }

  ngOnInit() {
  }

}
