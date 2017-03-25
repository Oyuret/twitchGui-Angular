import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Game } from './../twitch/games/game';
import { GamesStateService } from "../games-state/games-state.service";

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesCardComponent {
  @Input() game: Game;

  constructor(
    private gamesStateService: GamesStateService
  ){}

  public saveScrollPosition(id: number): void {
    this.gamesStateService.saveScrollPosition(id.toString());
  }
}
