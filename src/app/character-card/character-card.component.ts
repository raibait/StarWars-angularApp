import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: 'character-card.component.html'
})
export class CharacterCardComponent {
  @Input() character;
  @Input() clicked;
  @Output() pickedCharacterOut = new EventEmitter();
  species: Object;

  onClick(pickedCharacter) {
    this.pickedCharacterOut.emit(pickedCharacter);
  }
}
