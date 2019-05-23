import { TestBed } from '@angular/core/testing';

import { DataBienImmoService } from './data-bien-immo.service';

describe('DataBienImmoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBienImmoService = TestBed.get(DataBienImmoService);
    expect(service).toBeTruthy();
  });
});
