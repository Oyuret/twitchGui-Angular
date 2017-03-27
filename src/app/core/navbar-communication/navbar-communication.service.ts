import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class NavbarCommunicationService {
  private filterEventSource = new BehaviorSubject<string>('');
  private reloadEventSource = new Subject();

  public filterEvent$ = this.filterEventSource.asObservable();
  public reloadEvent$ = this.reloadEventSource.asObservable();

  public announceFilterEvent(text: string): void {
    this.filterEventSource.next(text);
  }

  public announceReloadEvent(): void {
    this.reloadEventSource.next();
  }

  constructor() { }

}
