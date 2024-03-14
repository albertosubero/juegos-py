import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModel } from '../models/games';

const apiUrl: string = 'https://catalog.api.gamedistribution.com/api/v2.0/rss'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  findGamesByFilters({collection = 'All', categories = 'All'}) {
    return this.http.get<GameModel[]>(`${apiUrl}/All/?collection=${collection}&categories=${categories}&tags=All&subType=All&type=All&mobile=All&rewarded=all&amount=10&page=1&format=json`);
  }
}
