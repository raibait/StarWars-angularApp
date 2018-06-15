import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html'
})
export class ProfileViewComponent implements OnChanges {
  @Input() pickedCharacterOut;

  ngOnChanges() {
    console.log('test2');
    console.log(this.pickedCharacterOut);
  }
}
