import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styles: [
    `
      .starship {
        padding-left: 1em;
      }
      .detail-info {
        background-color: #007bff;
        border-color: #007bff;
        border-radius: 25px;
        color: white;
        padding-left: 5px;
        padding-right: 5px;
        font-weight: bold;
      }
      .list-group-item {
        display: flex;
        justify-content: space-between;
      }
    `
  ]
})
export class ProfileViewComponent {
  @Input() pickedCharacterOut;
}
