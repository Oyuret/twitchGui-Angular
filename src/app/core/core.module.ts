import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CollapseModule } from "ng2-bootstrap";

import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarCommunicationService } from "./navbar-communication/navbar-communication.service";
import { throwIfAlreadyLoaded } from './module-import.guard';
import {CacheCommunicationService} from "./cache-communication/cache-communication.service";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent],
  providers: [NavbarCommunicationService, CacheCommunicationService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
