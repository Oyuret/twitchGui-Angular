import { Component, OnInit } from '@angular/core';
import { NavbarCommunicationService } from "../navbar-communication/navbar-communication.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed: boolean = true;

  public menu: Array<any> = [
    {
      'title': 'Games',
      'link': '/'
    }
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

}
