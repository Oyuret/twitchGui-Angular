import { TestBed, inject } from '@angular/core/testing';

import { CacheCommunicationService } from './cache-communication.service';

describe('CacheCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheCommunicationService]
    });
  });

  it('should ...', inject([CacheCommunicationService], (service: CacheCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
