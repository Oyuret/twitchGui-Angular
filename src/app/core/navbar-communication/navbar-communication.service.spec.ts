import { TestBed, inject } from '@angular/core/testing';

import { NavbarCommunicationService } from './navbar-communication.service';

describe('NavbarCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarCommunicationService]
    });
  });

  it('should ...', inject([NavbarCommunicationService], (service: NavbarCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
