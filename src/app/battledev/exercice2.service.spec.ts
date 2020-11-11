import { TestBed } from '@angular/core/testing';

import { Exercice2Service } from './exercice2.service';
import { ParsingService } from './parsing/parsing.service';

import {instance, mock, when} from 'ts-mockito';


describe('Exercice2Service', () => {
  let exercice2Service: Exercice2Service;
  let mockParsingService: ParsingService;
  let parsingService: ParsingService;

  beforeEach(() => {
    mockParsingService = mock(ParsingService);
    when(mockParsingService.getCalcString()).thenReturn([
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
    parsingService = instance(mockParsingService);
    exercice2Service = new Exercice2Service(parsingService);
  });

  it('should return tab with good product', () => {
    // Arrange
    exercice2Service.key = 'armoire';

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

  it('should return the low cost price', () => {
    // Arrange
    const expectedResult = 16;
    const cleanedTab = [83, 16, 83, 82];

    // Act
    const lowerPrice = exercice2Service.getLowerPrice(cleanedTab);

    // Assert
    expect(lowerPrice).toEqual(expectedResult);
  });
});
