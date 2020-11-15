import { TestBed } from '@angular/core/testing';

import { Exercice3Service } from './exercice3.service';
import {ParsingService} from './parsing/parsing.service';
import {instance, mock, when} from 'ts-mockito';

describe('Exercice3Service', () => {
  let exercice3Service: Exercice3Service;
  let mockParsingService: ParsingService;
  let parsingService: ParsingService;

  beforeEach(() => {
    mockParsingService = mock(ParsingService);
    parsingService = instance(mockParsingService);
    exercice3Service = new Exercice3Service(parsingService);
  });

  it('should be return higher average', () => {
    // Arrange
    const expectedResult = 12;
    const inputValue = [
      ['5', '9', '7'],
      ['10', '17', '7']
    ];

    // Act
    const result = exercice3Service.getGoodAverage(inputValue);

    // Assert
    expect(result).toEqual(expectedResult);

  });

  it('should be return good result INTEGRATION TEST', () => {
    const input = [
      '44',
      '6 14 14',
      '16 14 10',
      '18 4 19',
      '11 18 20',
      '6 2 10',
      '0 7 17',
      '20 4 17',
      '1 14 11',
      '12 5 13',
      '15 0 3',
      '6 14 6',
      '1 3 9',
      '14 3 3',
      '16 1 11',
      '2 12 9',
      '12 20 7',
      '10 5 12',
      '3 9 18',
      '1 11 19',
      '20 15 3',
      '6 17 8',
      '11 8 8',
      '4 15 3',
      '1 10 3',
      '8 16 17',
      '9 19 5',
      '20 16 18',
      '4 16 11',
      '9 9 4',
      '2 17 9',
      '18 5 16',
      '3 19 19',
      '2 9 1',
      '14 16 0',
      '12 13 7',
      '6 4 14',
      '18 4 8',
      '4 4 15',
      '5 5 14',
      '13 6 1',
      '7 18 9',
      '13 16 19',
      '4 19 18',
      '1 1 4'
    ];

    const expectedAverage = 18;
    const parsingServiceIntegration = new ParsingService();
    const exercice3Integration = new Exercice3Service(parsingServiceIntegration);

    // Act
    const result = exercice3Integration.getResult(input);

    // Assert
    expect(result).toEqual(expectedAverage);

  });
});
