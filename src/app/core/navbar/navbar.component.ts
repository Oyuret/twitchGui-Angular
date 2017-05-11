import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarCommunicationService } from "../navbar-communication/navbar-communication.service";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  private filterTermSubscription: Subscription;
  public isCollapsed: boolean = true;

  public reloadEvent() {
    this.navbarCommunicationService.announceReloadEvent();
  }

  private filterTermControl = new FormControl();

  constructor(private navbarCommunicationService: NavbarCommunicationService) {
    this.filterTermControl.valueChanges
      .subscribe((filterTerm: string) => this.navbarCommunicationService.announceFilterEvent(filterTerm));
  }

  ngOnDestroy() {
    if(this.filterTermSubscription !== null) { this.filterTermSubscription.unsubscribe(); }
  }

}
