import { TestBed } from '@angular/core/testing';

import { ParseServiceService } from './parse-service.service';

describe('ParseServiceService', () => {
  let service: ParseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
