import { TestBed, inject } from '@angular/core/testing';

import { GamesCardCommService } from './games-card-comm.service';

describe('GamesCardCommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesCardCommService]
    });
  });

  it('should ...', inject([GamesCardCommService], (service: GamesCardCommService) => {
    expect(service).toBeTruthy();
  }));
});
