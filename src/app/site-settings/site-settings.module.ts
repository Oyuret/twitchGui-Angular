import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteSettingsRoutingModule } from './site-settings-routing.module';
import { SiteSettingsComponent } from './site-settings/site-settings.component';

@NgModule({
  imports: [
    CommonModule,
    SiteSettingsRoutingModule
  ],
  declarations: [SiteSettingsComponent]
})
export class SiteSettingsModule { }
