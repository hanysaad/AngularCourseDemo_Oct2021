import { TestBed } from '@angular/core/testing';

import { GenericAPICallerService } from './generic-apicaller.service';

describe('GenericAPICallerService', () => {
  let service: GenericAPICallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericAPICallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
