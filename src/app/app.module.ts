import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgPipesModule } from 'ng-pipes';
import { CollapseModule } from 'ng2-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamesComponent } from './games/games.component';
import { StreamsComponent } from './streams/streams.component';
import { GamesStateService } from "./games-state/games-state.service";
import { GamesCardComponent } from './games-card/games-card.component';
import { StreamsCardComponent } from './streams-card/streams-card.component';
import { NavbarCommunicationService } from "./components/navbar-communication/navbar-communication.service";

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
    ReactiveFormsModule,
    HttpModule,
    NgPipesModule,
    CollapseModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    AppRoutingModule
  ],
  providers: [GamesStateService, NavbarCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
