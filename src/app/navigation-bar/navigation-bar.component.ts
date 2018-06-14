import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html'
})
export class NavigationBarComponent implements OnInit {
  data: any;
  constructor(private starwarsService: StarwarsService) {}

  ngOnInit() {
    this.starwarsService.getPeople().subscribe(data => (this.data = data));
  }
}
