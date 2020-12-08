import { TestBed } from '@angular/core/testing';

import { Exercice6Service } from './exercice6.service';
import {Exercice5Service} from './exercice5.service';
import {ParsingService} from './parsing/parsing.service';
import {instance, mock} from 'ts-mockito';

describe('Exercice6Service', () => {
  let exercice6Service: Exercice6Service;
  let mockParsingService: ParsingService;
  let parsingService: ParsingService;

  beforeEach(() => {
    mockParsingService = mock(ParsingService);
    parsingService = instance(mockParsingService);
    exercice6Service = new Exercice6Service(parsingService);
  });

  it('should be a letter', () => {
    const input = 'a';
    const expectedValue = true;

    const result = exercice6Service.isLetter(input);

    expect(result).toEqual(expectedValue);
  });

  it('should be a letter', () => {
    const input = 'Z';
    const expectedValue = true;

    const result = exercice6Service.isLetter(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not be a letter', () => {
    const input = ';';
    const expectedValue = false;

    const result = exercice6Service.isLetter(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not be a letter', () => {
    const input = '.';
    const expectedValue = false;

    const result = exercice6Service.isLetter(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not be a letter', () => {
    const input = '2';
    const expectedValue = false;

    const result = exercice6Service.isLetter(input);

    expect(result).toEqual(expectedValue);
  });

  it('should be a number', () => {
    const input = '2';
    const expectedValue = true;

    const result = exercice6Service.isNumber(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not be a number', () => {
    const input = 'a';
    const expectedValue = false;

    const result = exercice6Service.isNumber(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not be a number', () => {
    const input = 'Z';
    const expectedValue = false;

    const result = exercice6Service.isNumber(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not be a number', () => {
    const input = '.';
    const expectedValue = false;

    const result = exercice6Service.isNumber(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not be a number', () => {
    const input = 'é';
    const expectedValue = false;

    const result = exercice6Service.isNumber(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not have 6 char', () => {
    const input = 'a';
    const expectedValue = false;

    const result = exercice6Service.hasSixChar(input);

    expect(result).toEqual(expectedValue);
  });

  it('should have 6 char', () => {
    const input = 'abcdef';
    const expectedValue = true;

    const result = exercice6Service.hasSixChar(input);

    expect(result).toEqual(expectedValue);
  });

  it('should have 6 char', () => {
    const input = 'a2cdef';
    const expectedValue = true;

    const result = exercice6Service.hasSixChar(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not have 6 char', () => {
    const input = 'abcdefg';
    const expectedValue = false;

    const result = exercice6Service.hasSixChar(input);

    expect(result).toEqual(expectedValue);
  });

  it('should password is correct', () => {
    const input = 'a2cdef';
    const expectedValue = true;

    const result = exercice6Service.passIsCorrect(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not password is correct', () => {
    const input = 'a2cdefg';
    const expectedValue = false;

    const result = exercice6Service.passIsCorrect(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not password is correct', () => {
    const input = 'a2cde';
    const expectedValue = false;

    const result = exercice6Service.passIsCorrect(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not password is correct', () => {
    const input = 'a23de';
    const expectedValue = false;

    const result = exercice6Service.passIsCorrect(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not password is correct', () => {
    const input = '.2cde';
    const expectedValue = false;

    const result = exercice6Service.passIsCorrect(input);

    expect(result).toEqual(expectedValue);
  });

  it('should not password is correct', () => {
    const input = '=2cde';
    const expectedValue = false;

    const result = exercice6Service.passIsCorrect(input);

    expect(result).toEqual(expectedValue);
  });

  it('should return number of correct passwords', () => {
    const input = [
      'FC4BOTO',
      'L7EWVR',
      '853504',
      'P4SSBL',
      'W9SQDP',
      'V2#XUR',
      'I1JNZB',
      'BUSLHT',
      'Z7EOMF',
      '.2DQWHC',
      'P4BJF6',
      'SI?CEB',
        'E86PEKL',
      '#5.KVX',
      'RY3KCNZ',
      'P5GVF',
      'Y01.EGC',
      'B86FHA',
      'D7.OOU',
      'CK0NMQJ',
        '?0PUH',
      'L7MJ.S',
      'L95?DW',
        '0HQ.V',
      'C68MUIZ',
      'ISZKEQ',
      'S5JBZG',
      'T2FGHI',
      '0HPQE',
      'I6XDDP',
      'L0XAZFF',
      'N8WWYS',
        '?5.EV',
      'ENVMAJ',
      'R3ALM',
      'D9YDVZ',
      'A9CNU8',
      'G5NGC3',
      'KXPYQ?',
        'Y8QEZ?',
          'R0ZMES',
          'I1PKRH',
        '288608',
      'B4URHH',
      'Q1EDIB',
      'D8B?IGR',
        'RKE#?L',
        'E8FYZC',
      '8IWNQ',
      'B06FF?G',
        '2YIID',
      'O.VZBT',
      'Z4YUS',
      'T5VQZO',
      'A4QCD7',
      'H0?P.HX'
    ];
    const expectedValue = 16;

    const result = exercice6Service.getNbCorrectPassword(input);

    expect(result).toEqual(expectedValue);
  });

  it('should return number of correct passwords INTEGRATION TEST', () => {
    const input = [
      '56',
      'FC4BOTO',
      'L7EWVR',
      '853504',
      'P4SSBL',
      'W9SQDP',
      'V2#XUR',
      'I1JNZB',
      'BUSLHT',
      'Z7EOMF',
      '.2DQWHC',
      'P4BJF6',
      'SI?CEB',
      'E86PEKL',
      '#5.KVX',
      'RY3KCNZ',
      'P5GVF',
      'Y01.EGC',
      'B86FHA',
      'D7.OOU',
      'CK0NMQJ',
      '?0PUH',
      'L7MJ.S',
      'L95?DW',
      '0HQ.V',
      'C68MUIZ',
      'ISZKEQ',
      'S5JBZG',
      'T2FGHI',
      '0HPQE',
      'I6XDDP',
      'L0XAZFF',
      'N8WWYS',
      '?5.EV',
      'ENVMAJ',
      'R3ALM',
      'D9YDVZ',
      'A9CNU8',
      'G5NGC3',
      'KXPYQ?',
      'Y8QEZ?',
      'R0ZMES',
      'I1PKRH',
      '288608',
      'B4URHH',
      'Q1EDIB',
      'D8B?IGR',
      'RKE#?L',
      'E8FYZC',
      '8IWNQ',
      'B06FF?G',
      '2YIID',
      'O.VZBT',
      'Z4YUS',
      'T5VQZO',
      'A4QCD7',
      'H0?P.HX'
    ];
    const expectedValue = 16;
    const parsingServiceIntegration = new ParsingService();
    const exercice6Integration = new Exercice6Service(parsingServiceIntegration);

    const result = exercice6Integration.getResult(input);

    expect(result).toEqual(expectedValue);
  });
});
