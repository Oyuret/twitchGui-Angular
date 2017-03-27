import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarCommunicationService } from "../navbar-communication/navbar-communication.service";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private filterTermSubscription: Subscription;
  public isCollapsed: boolean = true;

  public menu: Array<any> = [
    { 'title': 'Games', 'link': '/games' },
    { 'title': 'Following', 'link': '/following' },
    { 'title': 'Search', 'link': '/search' },
    { 'title': 'Settings', 'link': '/settings' }
  ];

  public reloadEvent() {
    this.navbarCommunicationService.announceReloadEvent();
  }

  private filterTermControl = new FormControl();

  constructor(private navbarCommunicationService: NavbarCommunicationService) {
    this.filterTermControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((filterTerm: string) => this.navbarCommunicationService.announceFilterEvent(filterTerm));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.filterTermSubscription !== null) { this.filterTermSubscription.unsubscribe(); }
  }

}
