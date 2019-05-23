import { TestBed } from '@angular/core/testing';

import { DataCodePostalService } from './data-code-postal.service';

describe('DataCodePostalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCodePostalService = TestBed.get(DataCodePostalService);
    expect(service).toBeTruthy();
  });
});
