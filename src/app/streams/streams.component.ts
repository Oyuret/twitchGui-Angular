import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UniqPipe } from "ng-pipes";
import { Subscription } from "rxjs";
import 'rxjs/add/operator/finally';

import { StreamsService } from "../twitch/streams/streams.service";
import { Stream } from './../twitch/streams/stream';
import { NavbarCommunicationService } from "../components/navbar-communication/navbar-communication.service";

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
  providers: [StreamsService, UniqPipe]
})
export class StreamsComponent implements OnInit, OnDestroy {
  private filterEventSubscription: Subscription;
  private reloadEventSubscription: Subscription;

  public streams: Stream[] = [];
  public isLoading: boolean = false;
  public filterTerm: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private streamsService: StreamsService,
    private uniquePipe: UniqPipe,
    private navbarCommunicationService: NavbarCommunicationService
  ) {
    this.filterEventSubscription = this.navbarCommunicationService.filterEvent$
      .subscribe((term: string) => this.filterTerm = term);

    this.reloadEventSubscription = this.navbarCommunicationService.reloadEvent$
      .subscribe(() => { this.streams = []; this.getStreams(); });
  }

  public getStreams(): void {
    let game: string = this.activatedRoute.snapshot.params['game'];
    this.isLoading = true;
    this.streamsService.getStreams(game, this.streams.length)
      .finally(() => this.isLoading = false)
      .subscribe(
        streams => {this.streams = this.streams.concat(streams); this.streams = this.uniquePipe.transform(this.streams, 'name');},
        error => console.log(<any>error)
      );
  }

  ngOnInit() {
    this.getStreams();
  }

  ngOnDestroy() {
    if(this.filterEventSubscription !== null) { this.filterEventSubscription.unsubscribe(); }
    if(this.reloadEventSubscription !== null) { this.reloadEventSubscription.unsubscribe(); }
  }

}
