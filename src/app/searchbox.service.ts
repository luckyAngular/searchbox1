import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchboxService {
  constructor(private http: HttpClient) {

  }

  // tslint:disable-next-line:typedef
  public getSearchResults(value: string) {
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events?apikey=vWESzvCF7Ikp6GyCSXri5ZGXrWfTGAnT&locale=*&city=' + value)
      .pipe(map((response: any) => response));
  }
}
