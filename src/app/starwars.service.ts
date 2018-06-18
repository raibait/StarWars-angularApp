import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, observable } from 'rxjs';
// import { ICharacter } from './character.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, concatMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable()
export class StarwarsService {
  constructor(private http: HttpClient) {}

  // getPeople() {
  //   return this.http
  //     .get('https://swapi.co/api/people/?format=json')
  //     .pipe(catchError(this.handleError('getPeople', [])));
  // }

  getPeople() {
    return this.http.get('https://swapi.co/api/people/?format=json').pipe(
      map(response => response['results']),
      concatMap(
        characters =>
          forkJoin(
            ...this.extractAllSpecies(characters).map(species =>
              this.getSpecies(species)
            )
          ),
        (characters, species) =>
          this.assignSpeciesToCharacters(characters, species)
      )
    );
  }

  extractAllSpecies(characters): string[] {
    const extractedSpeciesUrls: string[] = [];
    const speciesUrls = characters.map(character => character.species);

    for (let i = 0; i < speciesUrls.length; i++) {
      for (let j = 0; j < speciesUrls[i].length; j++) {
        if (extractedSpeciesUrls.indexOf(speciesUrls[i][j]) === -1) {
          extractedSpeciesUrls.push(speciesUrls[i][j]);
        }
      }
    }
    return extractedSpeciesUrls;
  }

  assignSpeciesToCharacters(characters, species) {
    console.log(characters);
    console.log(species);
    return characters.map(character => {
      const speciesList = character.species.map(
        spec => species.find(spec1 => spec1.url === spec).name
      );
      return Object.assign(character, { species: speciesList });
    });
  }

  // getSpecies(link) {
  //   return this.http
  //     .get(link)
  //     .pipe(catchError(this.handleError('getPeople', [])));
  // }

  getSpecies(speciesUrl: string): Observable<string> {
    return this.http.get<string>(speciesUrl);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    };
  }
}
