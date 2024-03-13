import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModel } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  findGamesByFilters() {
    return this.http.get<GameModel[]>(`https://catalog.api.gamedistribution.com/api/v2.0/rss/All/?collection=4&categories=All&tags=All&subType=All&type=All&mobile=All&rewarded=all&amount=10&page=1&format=json`);
  }
}
