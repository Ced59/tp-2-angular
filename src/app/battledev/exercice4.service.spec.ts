import { TestBed } from '@angular/core/testing';

import { Exercice4Service } from './exercice4.service';

describe('Exercice4Service', () => {
  let service: Exercice4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercice4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
