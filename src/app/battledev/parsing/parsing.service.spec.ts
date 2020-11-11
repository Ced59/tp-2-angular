import { TestBed } from '@angular/core/testing';

import { ParsingService } from './parsing.service';

describe('When formatting inputs', () => {

  let parsingService;
  beforeEach(() => {
    parsingService = new ParsingService();
  });

  it('should remove the first input', () => {
    // Arrange
    const expectedInputsString = [
      '5 3',
      '3 2',
      '4 6'
    ];

    parsingService.inputString = [
      '3',
      '5 3',
      '3 2',
      '4 6'
    ];

    // Act
    parsingService.removeFirst();

    // Assert
    expect(parsingService.inputString).toEqual(expectedInputsString);

  });
});
