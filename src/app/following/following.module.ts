import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowingRoutingModule } from './following-routing.module';
import { FollowingComponent } from './following/following.component';

@NgModule({
  imports: [
    CommonModule,
    FollowingRoutingModule
  ],
  declarations: [FollowingComponent]
})
export class FollowingModule { }
