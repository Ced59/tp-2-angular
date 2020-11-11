import { TestBed } from '@angular/core/testing';

import { Exercice6Service } from './exercice6.service';

describe('Exercice6Service', () => {
  let service: Exercice6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercice6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
