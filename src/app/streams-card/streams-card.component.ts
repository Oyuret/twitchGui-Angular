import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Stream } from "../twitch/streams/stream";

@Component({
  selector: 'app-streams-card',
  templateUrl: './streams-card.component.html',
  styleUrls: ['./streams-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamsCardComponent implements OnInit {
  @Input() stream: Stream;

  constructor() { }

  ngOnInit() {
  }

}
