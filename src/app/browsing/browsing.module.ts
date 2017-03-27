import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgPipesModule } from "ng-pipes";
import { Ng2PageScrollModule } from "ng2-page-scroll";

import { BrowsingRoutingModule } from './browsing-routing.module';
import { GamesComponent } from "./games/games.component";
import { StreamsComponent } from "./streams/streams.component";
import { GamesStateService } from "./games-state/games-state.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    BrowsingRoutingModule,
    NgPipesModule,
    Ng2PageScrollModule,
    SharedModule
  ],
  declarations: [
    GamesComponent,
    StreamsComponent
  ],
  exports: [],
  providers: [GamesStateService]
})
export class BrowsingModule { }
