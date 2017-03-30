import { Injectable } from '@angular/core';

import { Game } from '../../twitch/classes/game';

@Injectable()
export class GamesStateService {

  private games: Game[];
  private scrollPosition: string;

  public hasSavedGames(): boolean {
    return this.games != null;
  }

  public hasSavedScrollPosition(): boolean {
    return this.scrollPosition != null;
  }

  public saveGames(games: Game[]): void {
    this.games = games;
  }

  public saveScrollPosition(scrollPosition: string): void {
    this.scrollPosition = scrollPosition;
  }

  public getSavedGames(): Game[] {
    return this.games;
  }

  public getSavedScrollPosition(): string {
    return this.scrollPosition;
  }

  constructor() {}

}
