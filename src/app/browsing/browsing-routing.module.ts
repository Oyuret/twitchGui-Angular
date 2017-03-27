import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { StreamsComponent } from "./streams/streams.component";

const routes: Routes = [
  { path: '', component: GamesComponent, children: [] },
  { path: ':game', component: StreamsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowsingRoutingModule { }
