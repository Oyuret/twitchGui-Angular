import { TestBed, inject } from '@angular/core/testing';

import { SearchStateService } from './search-state.service';

describe('SearchStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchStateService]
    });
  });

  it('should ...', inject([SearchStateService], (service: SearchStateService) => {
    expect(service).toBeTruthy();
  }));
});
