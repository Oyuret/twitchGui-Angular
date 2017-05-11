import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Stream } from "../../twitch/classes/stream";

@Component({
  selector: 'app-streams-card',
  templateUrl: './streams-card.component.html',
  styleUrls: ['./streams-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamsCardComponent {
  @Input() stream: Stream;
  @Output() streamsCardClicked: EventEmitter<Stream> = new EventEmitter<Stream>();

  public handleClick(): void {
    this.streamsCardClicked.emit(this.stream);
  }

  constructor() { }

}
