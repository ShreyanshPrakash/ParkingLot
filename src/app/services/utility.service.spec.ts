import { TestBed } from '@angular/core/testing';

import { UtilitieService } from './utility.service';

describe('UtilitieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilitieService = TestBed.get(UtilitieService);
    expect(service).toBeTruthy();
  });
});
