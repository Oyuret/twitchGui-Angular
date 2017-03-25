import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgPipesModule } from 'ng-pipes';
import { CollapseModule } from 'ng2-bootstrap';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamesComponent } from './games/games.component';
import { StreamsComponent } from './streams/streams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GamesComponent,
    StreamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgPipesModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
