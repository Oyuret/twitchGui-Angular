import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class StreamsCardCommService {
  private clickedEventSource = new Subject<string>();

  public clickedEvent$ = this.clickedEventSource.asObservable();

  public announceClicked(id: string) {
    this.clickedEventSource.next(id);
  }

  constructor() { }

}
