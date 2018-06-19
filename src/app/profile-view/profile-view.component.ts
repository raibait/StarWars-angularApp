import { Component, Input, OnChanges } from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';

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
export class ProfileViewComponent implements OnChanges {
  @Input() pickedCharacterOut;

  ngOnChanges() {
    console.log(this.pickedCharacterOut);
  }
}
