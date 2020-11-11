import { TestBed } from '@angular/core/testing';

import { Exercice5Service } from './exercice5.service';

describe('Exercice5Service', () => {
  let service: Exercice5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercice5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
