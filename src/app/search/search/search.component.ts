import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { SearchService } from "../../twitch/search/search.service";
import { SearchStateService } from "../search-state/search-state.service";
import { NavbarCommunicationService } from "../../core/navbar-communication/navbar-communication.service";
import { Game } from "../../twitch/classes/game";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription;
  private searchFieldEventSubscription: Subscription;
  private searchButtonEventSubscription: Subscription;

  private results: Array<Game> = [];
  private searchTerm: string;

  constructor(
    private searchService: SearchService,
    private searchStateService: SearchStateService,
    private navbarCommunication: NavbarCommunicationService,
    private router: Router
  ) {
    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => this.searchStateService.saveResults(this.results));

    this.searchButtonEventSubscription = this.navbarCommunication.reloadEvent$
      .filter(() => this.searchTerm !== '' && this.searchTerm !== undefined)
      .switchMap(() => this.searchService.searchGames(this.searchTerm))
      .subscribe((games: Array<Game>) => this.results = games);

    this.searchFieldEventSubscription = this.navbarCommunication.filterEvent$
      .subscribe((searchTerm: string) => this.searchTerm = searchTerm);
  }

  ngOnInit() {
    if(this.searchStateService.hasSavedResults()) {
      this.results = this.searchStateService.getSavedResults();
    }
  }

  ngOnDestroy() {
    if(this.routerSubscription != null) { this.routerSubscription.unsubscribe(); }
    if(this.searchFieldEventSubscription != null) { this.searchFieldEventSubscription.unsubscribe(); }
    if(this.searchButtonEventSubscription != null) { this.searchButtonEventSubscription.unsubscribe(); }
  }

}
