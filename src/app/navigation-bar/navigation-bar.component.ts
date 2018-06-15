import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html'
})
export class NavigationBarComponent implements OnInit {
  @Output() pickedCharacterOut = new EventEmitter();
  data: any;
  constructor(private starwarsService: StarwarsService) {}

  ngOnInit() {
    this.starwarsService.getPeople().subscribe(data => (this.data = data));
  }

  handlePickedCharacter(pickedCharacter) {
    this.pickedCharacterOut.emit(pickedCharacter);
  }
}
