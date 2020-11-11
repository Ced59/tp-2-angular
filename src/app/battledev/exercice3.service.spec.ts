import { TestBed } from '@angular/core/testing';

import { Exercice3Service } from './exercice3.service';

describe('Exercice3Service', () => {
  let service: Exercice3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercice3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
