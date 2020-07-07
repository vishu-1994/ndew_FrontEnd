import { TestBed } from '@angular/core/testing';

import { AllCustomersService } from './all-customers.service';

describe('AllCustomersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllCustomersService = TestBed.get(AllCustomersService);
    expect(service).toBeTruthy();
  });
});
