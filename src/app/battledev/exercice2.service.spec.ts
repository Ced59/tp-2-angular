import { TestBed } from '@angular/core/testing';

import { Exercice2Service } from './exercice2.service';
import { ParsingService } from './parsing/parsing.service';

import {mock, when} from 'ts-mockito';


describe('Exercice2Service', () => {
  let exercice2Service: Exercice2Service;
  let mockParsingService: ParsingService;

  beforeEach(() => {
    exercice2Service = new Exercice2Service();
    mockParsingService = mock(ParsingService);
  });

  it('should return tab with good product', () => {
    // Arrange
      when(mockParsingService.calcString).thenReturn([
        ['armoire' , '16'],
        ['parapluie' , '38'],
        ['armoire' , '83'],
        ['tv' , '15'],
        ['meuble' , '17'],
        ['four' , '25'],
        ['souris' , '64'],
        ['armoire' , '82'],
        ['chaise' , '82']
      ]);

      when(mockParsingService.getSecondStringAndRemoveFirst()).thenReturn('armoire');

      const expectedTab = [
        ['armoire' , '16'],
        ['armoire' , '83'],
        ['armoire' , '82']
      ];

    // Act
      const cleanTab = exercice2Service.cleanTabByKey();

    // Assert
      expect(cleanTab).toEqual(expectedTab);
  });
});
