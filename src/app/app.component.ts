import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .topbar {
        position: fixed;
        width: 100%;
      }
      .sidebar {
        position: fixed;
        margin-top: 60px;
        width: 300px;
        overflow-y: scroll;
        max-height: calc(100% - 60px);
      }
      .content {
        position: relative;
        margin-top: 60px;
        margin-left: 300px;
      }
      ::-webkit-scrollbar {
        display: none;
      }
    `
  ]
})
export class AppComponent {
  pickedCharacterOut;
  searchTerm;
  title = 'app';

  handlePickedCharacter(pickedCharacter) {
    this.pickedCharacterOut = pickedCharacter;
  }

  handleSearchTermEmmitter(searchTerm) {
    this.searchTerm = searchTerm;
  }
}
