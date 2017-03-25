import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgPipesModule } from 'ng-pipes';
import { CollapseModule } from 'ng2-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamesComponent } from './games/games.component';
import { StreamsComponent } from './streams/streams.component';
import { GamesStateService } from "./games-state/games-state.service";
import { GamesCardComponent } from './games-card/games-card.component';
import { StreamsCardComponent } from './streams-card/streams-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GamesComponent,
    StreamsComponent,
    GamesCardComponent,
    StreamsCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgPipesModule,
    CollapseModule.forRoot(),
    Ng2PageScrollModule.forRoot()
  ],
  providers: [GamesStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
