import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pickedCharacterOut;
  title = 'app';

  handlePickedCharacter(pickedCharacter) {
    this.pickedCharacterOut = pickedCharacter;
  }
}
