import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgPipesModule } from "ng-pipes";

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from "../shared/shared.module";
import { SearchStateService } from "./search-state/search-state.service";

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    NgPipesModule
  ],
  declarations: [SearchComponent],
  providers: [SearchStateService]
})
export class SearchModule { }
