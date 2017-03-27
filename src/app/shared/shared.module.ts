import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { GamesCardComponent } from "./games-card/games-card.component";
import { StreamsCardComponent } from "./streams-card/streams-card.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [GamesCardComponent, StreamsCardComponent],
  exports: [GamesCardComponent, StreamsCardComponent]
})
export class SharedModule { }
