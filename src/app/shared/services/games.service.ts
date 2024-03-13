import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModel, SearchParams } from '../models/games';

const apiUrl: string = 'https://catalog.api.gamedistribution.com/api/v2.0/rss'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  findGamesByFilters(filtersParams: SearchParams) {
    return this.http.get<GameModel[]>(`${apiUrl}/All/?collection=${filtersParams.collection}&categories=All&tags=All&subType=All&type=All&mobile=All&rewarded=all&amount=10&page=1&format=json`);
  }
}
