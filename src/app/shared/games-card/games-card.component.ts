import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Game } from '../../twitch/games/game';
import { CacheCommunicationService } from "../../core/cache-communication/cache-communication.service";

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesCardComponent {
  @Input() game: Game;

  public saveScrollPosition(id: number): void {
    this.cacheCommunicationService.announceSaveScroll(id.toString());
  }

  constructor(private cacheCommunicationService: CacheCommunicationService) {}
}
