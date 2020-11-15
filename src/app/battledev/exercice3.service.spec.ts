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
    when(mockParsingService.getCalcString()).thenReturn([
      ['5', '9', '7'],
      ['10', '17', '7']
    ]);
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

});
