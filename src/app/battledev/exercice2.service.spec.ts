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

  it('should getResult return low price INTEGRATION TEST', () => {
    // Arrange
    const input = [
      '17',
      'armoire',
      'armoire 16',
      'armoire 38',
      'armoire 83',
      'four 82',
      'armoire 85',
      'armoire 17',
      'tv 41',
      'armoire 91',
      'armoire 92',
      'four 5',
      'tv 67',
      'four 69',
      'armoire 48',
      'four 46',
      'tv 65',
      'armoire 93',
      'tv 95'
    ];
    const expectedPrice = 16;

    const parsingServiceIntegration = new ParsingService();
    const exercice2Integration = new Exercice2Service(parsingServiceIntegration);

    // Act

    const result = exercice2Integration.getResult(input);

    // Assert
    expect(result).toEqual(expectedPrice);
  });
});
