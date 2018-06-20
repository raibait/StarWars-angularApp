import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, observable } from 'rxjs';
// import { ICharacter } from './character.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, concatMap, filter } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable()
export class StarwarsService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get('https://swapi.co/api/people/?format=json').pipe(
      map(response => response['results']),
      concatMap(
        characters =>
          forkJoin(
            ...this.extractProperty(characters, 'species').map(species =>
              this.getUrl(species)
            ),
            ...this.extractProperty(characters, 'starships').map(starships =>
              this.getUrl(starships)
            )
          ),
        (characters, properties) =>
          this.assignPropertyToCharacters(characters, properties)
      )
    );
  }

  extractProperty(characters, propertyName): string[] {
    const extractedPropertyUrls: string[] = [];
    const propertyUrls = characters.map(character => character[propertyName]);

    for (let i = 0; i < propertyUrls.length; i++) {
      for (let j = 0; j < propertyUrls[i].length; j++) {
        if (extractedPropertyUrls.indexOf(propertyUrls[i][j]) === -1) {
          extractedPropertyUrls.push(propertyUrls[i][j]);
        }
      }
    }
    return extractedPropertyUrls;
  }

  assignPropertyToCharacters(characters, properties) {
    return characters.map(character => {
      const speciesList = character.species.map(
        species => properties.find(species1 => species1.url === species).name
      );
      const starshipsList = character.starships.map(
        starship =>
          properties.find(starship1 => starship1.url === starship).name +
          ' / ' +
          properties.find(starship1 => starship1.url === starship).model
      );

      const starshipsModelsList = character.starships.map(
        starship =>
          properties.find(starship1 => starship1.url === starship).model
      );

      return Object.assign(character, {
        species: speciesList,
        starships: starshipsList
      });
    });
  }

  getUrl(Url: string): Observable<string> {
    return this.http.get<string>(Url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    };
  }
}
