import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent {
  searchTerm: string;
  @Output() searchTermEmmitter = new EventEmitter();

  filter(searchTerm) {
    this.searchTermEmmitter.emit(searchTerm);
  }
}
