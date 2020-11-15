import { TestBed } from '@angular/core/testing';

import { Exercice5Service } from './exercice5.service';
import {ParsingService} from './parsing/parsing.service';
import {instance, mock} from 'ts-mockito';

describe('Exercice5Service', () => {
  let exercice5Service: Exercice5Service;
  let mockParsingService: ParsingService;
  let parsingService: ParsingService;

  beforeEach(() => {
    mockParsingService = mock(ParsingService);
    parsingService = instance(mockParsingService);
    exercice5Service = new Exercice5Service(parsingService);
  });

  it('should be divisible by 4', () => {
    const year = 1680;
    const expectedValue = true;

    const result = exercice5Service.isDivBy4(year);

    expect(result).toEqual(expectedValue);
  });

  it('should not be divisible by 4', () => {
    const year = 1681;
    const expectedValue = false;

    const result = exercice5Service.isDivBy4(year);

    expect(result).toEqual(expectedValue);
  });

  it('should not be divisible by 400', () => {
    const year = 1680;
    const expectedValue = false;

    const result = exercice5Service.isDivBy400(year);

    expect(result).toEqual(expectedValue);
  });

  it('should be divisible by 400', () => {
    const year = 2000;
    const expectedValue = true;

    const result = exercice5Service.isDivBy400(year);

    expect(result).toEqual(expectedValue);
  });

  it('should not be divisible by 100', () => {
    const year = 1680;
    const expectedValue = false;

    const result = exercice5Service.isDivBy100(year);

    expect(result).toEqual(expectedValue);
  });

  it('should be divisible by 100', () => {
    const year = 1600;
    const expectedValue = true;

    const result = exercice5Service.isDivBy100(year);

    expect(result).toEqual(expectedValue);
  });

  it('should be divisible by 4 and not by 100', () => {
    const year = 1680;
    const expectedValue = true;

    const result = exercice5Service.isDivBy4not100(year);

    expect(result).toEqual(expectedValue);
  });

  it('should not be divisible by 4 and not by 100', () => {
    const year = 1681;
    const expectedValue = false;

    const result = exercice5Service.isDivBy4not100(year);

    expect(result).toEqual(expectedValue);
  });

  it('should be bissextile', () => {
    const year = 1680;
    const expectedValue = true;

    const result = exercice5Service.isBissextile(year);

    expect(result).toEqual(expectedValue);
  });

  it('should be bissextile', () => {
    const year = 2000;
    const expectedValue = true;

    const result = exercice5Service.isBissextile(year);

    expect(result).toEqual(expectedValue);
  });

  it('should not be bissextile', () => {
    const year = 1981;
    const expectedValue = false;

    const result = exercice5Service.isBissextile(year);

    expect(result).toEqual(expectedValue);
  });

  it('should be bissextile', () => {
    const year = 2012;
    const expectedValue = true;

    const result = exercice5Service.isBissextile(year);

    expect(result).toEqual(expectedValue);
  });

  it('should not be bissextile', () => {
    const year = 2015;
    const expectedValue = false;

    const result = exercice5Service.isBissextile(year);

    expect(result).toEqual(expectedValue);
  });

  it('should return BISSEXTILE', () => {
    const year = 2012;
    const expectedValue = 'BISSEXTILE';

    const result = exercice5Service.getSingleResult(year);

    expect(result).toEqual(expectedValue);
  });

  it('should return NON BISSEXTILE', () => {
    const year = 2015;
    const expectedValue = 'NON BISSEXTILE';

    const result = exercice5Service.getSingleResult(year);

    expect(result).toEqual(expectedValue);
  });

  it('should return tab results', () => {
    const input = [
      2000,
      1680,
      1919,
      2012,
      2015,
    ];
    const expectedValue = [
      'BISSEXTILE',
      'BISSEXTILE',
      'NON BISSEXTILE',
      'BISSEXTILE',
      'NON BISSEXTILE'
    ];

    const result = exercice5Service.getTabResult(input);

    expect(result).toEqual(expectedValue);
  });

  it('should be return good results INTEGRATION TEST', () => {
    const input = [
      '5',
      '2000',
      '1680',
      '1919',
      '2012',
      '2015',
    ];

    const expectedValue = [
      'BISSEXTILE',
      'BISSEXTILE',
      'NON BISSEXTILE',
      'BISSEXTILE',
      'NON BISSEXTILE'
    ];

    const parsingServiceIntegration = new ParsingService();
    const exercice5Integration = new Exercice5Service(parsingServiceIntegration);

    const result = exercice5Integration.getResult(input);

    expect(result).toEqual(expectedValue);
  });
});
