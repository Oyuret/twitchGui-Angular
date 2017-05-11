import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Game } from '../../twitch/classes/game';

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesCardComponent {
  @Input() game: Game;
  @Output() gamesCardClicked: EventEmitter<Game> = new EventEmitter<Game>();

  public handleClick(): void {
    this.gamesCardClicked.emit(this.game);
  }

  constructor() {}
}
