import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-character-card',
  templateUrl: 'character-card.component.html'
})
export class CharacterCardComponent implements OnInit {
  constructor(private starwarsService: StarwarsService) {}
  @Input() character;
  @Output() pickedCharacterOut = new EventEmitter();
  species: Object;
  ngOnInit() {
    // this.starwarsService
    //   .getSpecies(this.character.species[0])
    //   .subscribe(data => (this.species = data));
  }
  onClick(pickedCharacter) {
    this.pickedCharacterOut.emit(pickedCharacter);
  }
}
