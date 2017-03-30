import { TestBed, inject } from '@angular/core/testing';

import { StreamsCardCommService } from './streams-card-comm.service';

describe('StreamsCardCommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreamsCardCommService]
    });
  });

  it('should ...', inject([StreamsCardCommService], (service: StreamsCardCommService) => {
    expect(service).toBeTruthy();
  }));
});
