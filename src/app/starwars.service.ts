import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { IEvent, ISession } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable()
export class StarwarsService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http
      .get('https://swapi.co/api/people/?format=json')
      .pipe(catchError(this.handleError('getPeople', [])));
  }

  getSpecies(link) {
    return this.http
      .get(link)
      .pipe(catchError(this.handleError('getPeople', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    };
  }
}