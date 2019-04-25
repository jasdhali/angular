import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';

@Component({  
  selector: "",
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  heroes : HEROES;
  
  selectedHero : Hero;

  hero : Hero  = {
    id: 10, 
    name : 'Windstorm'
  };


  constructor() { }

  ngOnInit() {
  }

}
