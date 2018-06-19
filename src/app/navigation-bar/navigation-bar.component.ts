import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html'
})
export class NavigationBarComponent implements OnInit {
  @Output() pickedCharacterOut = new EventEmitter();
  pickedCharacter;
  data: any;
  constructor(private starwarsService: StarwarsService) {}

  ngOnInit() {
    this.starwarsService.getPeople().subscribe(data => {
      this.data = data;
      this.handlePickedCharacter(this.data[0]);
    });
  }

  handlePickedCharacter(pickedCharacter) {
    this.pickedCharacter = pickedCharacter;
    this.pickedCharacterOut.emit(this.pickedCharacter);
  }

  handleCardHighlight(character) {
    console.log(character.name);
    console.log(this.pickedCharacter);
    return character.name === this.pickedCharacter['name'] ? true : false;
  }
}
