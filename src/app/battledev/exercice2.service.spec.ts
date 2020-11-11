import { TestBed } from '@angular/core/testing';

import { Exercice2Service } from './exercice2.service';

describe('Exercice2Service', () => {
  let service: Exercice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
