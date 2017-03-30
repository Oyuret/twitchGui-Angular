import { Injectable } from '@angular/core';

import { Game } from "../../twitch/classes/game";

@Injectable()
export class SearchStateService {
  private searchResults: Array<Game>;

  public hasSavedResults(): boolean {
    return this.searchResults != null;
  }

  public getSavedResults(): Array<Game> {
    return this.searchResults;
  }

  public saveResults(results: Array<Game>): void {
    this.searchResults = results;
  }

  constructor() { }

}
