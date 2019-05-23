import { TestBed } from '@angular/core/testing';

import { BienImmoService } from './bien-immo.service';

describe('BienImmoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BienImmoService = TestBed.get(BienImmoService);
    expect(service).toBeTruthy();
  });
});
