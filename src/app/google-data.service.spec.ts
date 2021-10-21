import { TestBed } from '@angular/core/testing';

import { GoogleDataService } from './google-data.service';

describe('GoogleDataService', () => {
  let service: GoogleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
