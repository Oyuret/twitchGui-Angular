import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowingComponent } from "./following/following.component";

const routes: Routes = [
  { path: '', component: FollowingComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowingRoutingModule { }
