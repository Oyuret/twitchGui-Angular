import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Game } from '../../twitch/classes/game';
import { GamesCardCommService } from "../../core/games-card-comm/games-card-comm.service";

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesCardComponent {
  @Input() game: Game;

  public saveScrollPosition(id: number): void {
    this.gamesCardComm.announceClicked(id.toString());
  }

  constructor(private gamesCardComm: GamesCardCommService) {}
}
