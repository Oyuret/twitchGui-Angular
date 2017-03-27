import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', loadChildren:'./browsing/browsing.module#BrowsingModule' },
  { path: 'following', loadChildren:'./following/following.module#FollowingModule' },
  { path: 'search', loadChildren:'./search/search.module#SearchModule' },
  { path: 'settings', loadChildren:'./site-settings/site-settings.module#SiteSettingsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
