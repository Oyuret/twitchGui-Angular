import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class CacheCommunicationService {
  private saveScrollEventSource = new Subject<string>();

  public saveScrollEvent$ = this.saveScrollEventSource.asObservable();

  public announceSaveScroll(id: string) {
    this.saveScrollEventSource.next(id);
  }

  constructor() { }

}
