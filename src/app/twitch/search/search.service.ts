import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Game } from '../classes/game';

@Injectable()
export class SearchService {

  public searchGames(searchTerm: string): Observable<Game[]> {
    return this.http.get(`/api/twitch/searchGames?q=${searchTerm}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) : Game[] {
    let body = res.json();

    let games: Game[] = [];

    for(let gameData of body.games) {
      let game: Game = {
        id: gameData._id,
        name: gameData.name,
        viewers: gameData.viewers,
        channels: gameData.channels,
        boxart: gameData.box.medium
      };

      games.push(game);
    }

    return games;

  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private http: Http) { }

}
