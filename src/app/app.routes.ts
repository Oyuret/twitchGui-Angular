import { Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { StreamsComponent } from './streams/streams.component';

export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent, children: [] },
  { path: 'games/:game', component: StreamsComponent }
];
