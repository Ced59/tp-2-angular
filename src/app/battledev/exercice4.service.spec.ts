import { TestBed } from '@angular/core/testing';

import { Exercice4Service } from './exercice4.service';
import {ParsingService} from './parsing/parsing.service';
import {instance, mock} from 'ts-mockito';

describe('Exercice4Service', () => {
  let exercice4Service: Exercice4Service;
  let mockParsingService: ParsingService;
  let parsingService: ParsingService;

  beforeEach(() => {
    mockParsingService = mock(ParsingService);
    parsingService = instance(mockParsingService);
    exercice4Service = new Exercice4Service(parsingService);
  });

  it('should be return amount for one table of 2', () => {
    const nbPersonInTable = 2;
    const priceByPerson = 37;
    const expectedPrice = 74;

    const price = exercice4Service.getPriceByTable(nbPersonInTable, priceByPerson);

    expect(price).toEqual(expectedPrice);
  });

  it('should be return amount for one table of 3', () => {
    const nbPersonInTable = 3;
    const priceByPerson = 37;
    const expectedPrice = 111;

    const price = exercice4Service.getPriceByTable(nbPersonInTable, priceByPerson);

    expect(price).toEqual(expectedPrice);
  });

  it('should be return amount for one table of 4', () => {
    const nbPersonInTable = 4;
    const priceByPerson = 37;
    const expectedPrice = 133.2;

    const price = exercice4Service.getPriceByTable(nbPersonInTable, priceByPerson);

    expect(price).toEqual(expectedPrice);
  });

  it('should be return amount for one table of 5', () => {
    const nbPersonInTable = 5;
    const priceByPerson = 37;
    const expectedPrice = 166.5;

    const price = exercice4Service.getPriceByTable(nbPersonInTable, priceByPerson);

    expect(price).toEqual(expectedPrice);
  });

  it('should be return amount for one table of 6', () => {
    const nbPersonInTable = 6;
    const priceByPerson = 37;
    const expectedPrice = 177.6;

    const price = exercice4Service.getPriceByTable(nbPersonInTable, priceByPerson);

    expect(price).toEqual(expectedPrice);
  });

  it('should be return amount for one table of 9', () => {
    const nbPersonInTable = 9;
    const priceByPerson = 37;
    const expectedPrice = 266.4;

    const price = exercice4Service.getPriceByTable(nbPersonInTable, priceByPerson);

    expect(price).toEqual(expectedPrice);
  });

  it('should be return amount for one table of 10', () => {
    const nbPersonInTable = 10;
    const priceByPerson = 37;
    const expectedPrice = 259;

    const price = exercice4Service.getPriceByTable(nbPersonInTable, priceByPerson);

    expect(price).toEqual(expectedPrice);
  });

  it('should be return amount for one table of 15', () => {
    const nbPersonInTable = 15;
    const priceByPerson = 37;
    const expectedPrice = 388.5;

    const price = exercice4Service.getPriceByTable(nbPersonInTable, priceByPerson);

    expect(price).toEqual(expectedPrice);
  });
});
