import { Component, Input, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-character-card',
  templateUrl: 'character-card.component.html'
})
export class CharacterCardComponent implements OnInit {
  constructor(private starwarsService: StarwarsService) {}
  @Input() character;
  species: Object;
  ngOnInit() {
    this.starwarsService
      .getSpecies(this.character.species[0])
      .subscribe(data => (this.species = data));
  }
}
