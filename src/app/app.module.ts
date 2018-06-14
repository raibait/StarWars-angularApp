import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { StarwarsService } from './starwars.service';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileViewComponent,
    NavigationBarComponent,
    MenuContainerComponent,
    CharacterCardComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
