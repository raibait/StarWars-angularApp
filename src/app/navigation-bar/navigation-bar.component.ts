import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnChanges {
  @Input() searchTerm;
  @Output() pickedCharacterOut = new EventEmitter();
  pickedCharacter;
  sidebar = document.getElementById('sidebar');
  data: any;
  filteredData: any;

  constructor(private starwarsService: StarwarsService) {
    this.sidebar.onscroll = () => {
      if (
        this.sidebar.offsetHeight + this.sidebar.scrollTop ===
          this.sidebar.scrollHeight &&
        !this.starwarsService.loading
      ) {
        this.starwarsService.getPeople().subscribe(data => {
          this.data.push(...data);
        });
      }
    };
  }

  ngOnInit() {
    this.starwarsService.getPeople().subscribe(data => {
      this.data = data;
      this.filteredData = data;
      this.handlePickedCharacter(this.data[0]);
    });
  }

  ngOnChanges() {
    if (this.data) {
      this.filteredData = this.filterData(this.data, this.searchTerm);
    }
  }

  filterData(data, searchTerm) {
    const filteredData: Object[] = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1) {
        filteredData.push(data[i]);
      }
    }
    return filteredData;
  }

  handlePickedCharacter(pickedCharacter) {
    this.pickedCharacter = pickedCharacter;
    this.pickedCharacterOut.emit(this.pickedCharacter);
  }

  handleCardHighlight(character) {
    return character.name === this.pickedCharacter['name'] ? true : false;
  }
}
