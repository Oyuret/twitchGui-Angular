import { TestBed, inject } from '@angular/core/testing';

import { GamesStateService } from './games-state.service';

describe('GamesStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesStateService]
    });
  });

  it('should ...', inject([GamesStateService], (service: GamesStateService) => {
    expect(service).toBeTruthy();
  }));
});
