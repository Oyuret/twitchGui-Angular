import {Injectable, OnDestroy} from '@angular/core';

import { Game } from '../../twitch/games/game';
import { CacheCommunicationService } from "../../core/cache-communication/cache-communication.service";
import { Subscription } from "rxjs";

@Injectable()
export class GamesStateService implements OnDestroy{

  private games: Game[];
  private scrollPosition: string;
  private cacheCommunicationSubscription: Subscription;

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

  constructor(private cacheCommunicationService: CacheCommunicationService) {
    this.cacheCommunicationSubscription = this.cacheCommunicationService.saveScrollEvent$
      .subscribe((id: string) => this.saveScrollPosition(id));
  }

  ngOnDestroy() {
    if(this.cacheCommunicationSubscription !== null) { this.cacheCommunicationSubscription.unsubscribe(); }
  }

}
