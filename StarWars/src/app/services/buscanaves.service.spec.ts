import { TestBed } from '@angular/core/testing';

import { BuscanavesService } from './buscanaves.service';

describe('BuscanavesService', () => {
  let service: BuscanavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscanavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
