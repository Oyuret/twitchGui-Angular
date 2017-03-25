import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UniqPipe } from "ng-pipes";
import { Subscription } from "rxjs";
import 'rxjs/add/operator/finally';

import { StreamsService } from "../twitch/streams/streams.service";
import { Stream } from './../twitch/streams/stream';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
  providers: [StreamsService, UniqPipe]
})
export class StreamsComponent implements OnInit, OnDestroy {
  private streamsSubscription: Subscription;
  public isLoading: boolean = false;

  public streams: Stream[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private streamsService: StreamsService,
    private uniquePipe: UniqPipe
  ) { }

  public getStreams(): void {
    let game: string = this.activatedRoute.snapshot.params['game'];
    this.isLoading = true;
    this.streamsSubscription = this.streamsService.getStreams(game, this.streams.length)
      .finally(() => this.isLoading = false)
      .subscribe(
        streams => {this.streams = this.streams.concat(streams); this.streams = this.uniquePipe.transform(this.streams, 'name');},
        error => console.log(<any>error)
      );
  }

  ngOnInit() {
    this.getStreams();
  }

  ngOnDestroy() {}

}
