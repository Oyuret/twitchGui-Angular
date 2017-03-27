import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteSettingsComponent } from "./site-settings/site-settings.component";

const routes: Routes = [
  { path: '', component: SiteSettingsComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteSettingsRoutingModule { }
