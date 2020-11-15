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

  it('should be divisible by 400', () => {
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

  it('should be divisible by 100', () => {
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
});
