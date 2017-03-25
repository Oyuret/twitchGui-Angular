import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { PageScrollService, PageScrollInstance } from "ng2-page-scroll";
import { DOCUMENT } from "@angular/platform-browser";
import { UniqPipe } from "ng-pipes";
import { Subscription } from "rxjs";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/finally';

import { Game } from './../twitch/games/game';
import { GamesService } from './../twitch/games/games.service';
import { GamesStateService } from './../games-state/games-state.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GamesService, UniqPipe]
})
export class GamesComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription;

  public games: Array<Game> = new Array<Game>();
  public isLoading: boolean = false;

  constructor(
    private gamesService: GamesService,
    private gamesStateService: GamesStateService,
    private uniquePipe: UniqPipe,
    private router: Router,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => this.saveGames());
  }

  ngOnInit() {
    if(this.gamesStateService.hasSavedGames()) {
      this.restoreGames();
      this.restoreScrollPosition();
    } else {
      this.gamesService.getGames(this.games.length)
        .subscribe(
          games => { this.games = games; this.restoreScrollPosition(); },
          error => console.log(<any>error)
        );
    }
  }

  public getGames(): void {
    this.isLoading = true;

    this.gamesService.getGames(this.games.length)
      .finally(() => this.isLoading = false)
      .subscribe(
        games => { this.games = this.games.concat(games); this.games = this.uniquePipe.transform(this.games, 'id'); },
        error => console.log(<any>error)
      );
  }

  private restoreGames(): void {
    this.games = this.gamesStateService.getSavedGames();
  }

  private restoreScrollPosition(): void {
    if(!this.gamesStateService.hasSavedScrollPosition()) {
      return;
    }

    let scrollPosition: string = this.gamesStateService.getSavedScrollPosition();
    setTimeout(() => {
      let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `#card-${scrollPosition}`);
      this.pageScrollService.start(pageScrollInstance);
    }, 0);
  }

  private saveGames(): void {
    this.gamesStateService.saveGames(this.games);
  }

  ngOnDestroy() {
    if(this.routerSubscription != null) { this.routerSubscription.unsubscribe(); }
  }

}
