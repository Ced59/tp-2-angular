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

  it('should get 2nd value of original tab and remove her', () => {
    // Arrange
    const expectedString = 'armoire';

    parsingService.inputString = [
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

    const expectedInputString = [
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

    // Act
    const secondString = parsingService.getFirstEntryStringAndRemoveHer();

    // Assert
    expect(secondString).toEqual(expectedString);
    expect(parsingService.inputString).toEqual(expectedInputString);

  });

  it('should transform inputString in double tab', () => {
    parsingService.inputString = [
      'armoire 16',
      'armoire 38',
      'armoire 83',
      'four 82'
    ];

    const expectedInputString = [
      ['armoire' , '16'],
      ['armoire' , '38'],
      ['armoire' , '83'],
      ['four' , '82']
    ];

    // Act
    parsingService.transformInDoubleTab();

    // Assert
    expect(parsingService.calcString).toEqual(expectedInputString);

  });

  it('should transform multi input in double tab', () => {
    parsingService.inputString = [
      '5 9 7',
      '10 17 7'
    ];

    const expectedInputString = [
      ['5', '9', '7'],
      ['10', '17', '7']
    ];

    // Act
    parsingService.transformInDoubleTab();

    // Assert
    expect(parsingService.calcString).toEqual(expectedInputString);
  });

  it('should convert second tab in number', () => {
    const cleanedTab = [
      ['armoire' , '16'],
      ['armoire' , '38'],
      ['armoire' , '83'],
      ['four' , '82']
    ];

    const expectedTabOne = [
      'armoire',
      'armoire',
      'armoire',
      'four'
    ];

    const expectedTabTwo = [
      16,
      38,
      83,
      82
    ];

    // Act
    parsingService.transformInTwoTablesAndConvertSecond(cleanedTab);

    // Assert
    expect(parsingService.reducedTabOne).toEqual(expectedTabOne);
    expect(parsingService.reducedTabTwo).toEqual(expectedTabTwo);
  });

  it('should return second value', () => {
    parsingService.inputString = [
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
    const expectedValue = 'armoire';

    const secondString = parsingService.exercice2ReturnProduct();

    expect(secondString).toEqual(expectedValue);
  });
});
