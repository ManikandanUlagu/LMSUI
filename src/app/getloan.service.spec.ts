import { TestBed, inject } from '@angular/core/testing';

import { GetloanService } from './getloan.service';

describe('GetloanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetloanService]
    });
  });

  it('should be created', inject([GetloanService], (service: GetloanService) => {
    expect(service).toBeTruthy();
  }));
});
