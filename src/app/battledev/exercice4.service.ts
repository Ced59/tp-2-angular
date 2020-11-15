import { Injectable } from '@angular/core';
import {ParsingService} from './parsing/parsing.service';

@Injectable({
  providedIn: 'root'
})
export class Exercice4Service {
  parsingService: ParsingService;
  inputString: string[];

  constructor(parsingService: ParsingService) {
    this.parsingService = parsingService;
    this.inputString = [];
  }

  getPriceByTable(nbPersonInTable: number, priceByPerson: number): number {
    const totalWithoutPromo = nbPersonInTable * priceByPerson;
    let totalWithPromo: number;
    if (nbPersonInTable < 4)
    {
      totalWithPromo = totalWithoutPromo;
    }
    else if (nbPersonInTable < 6)
    {
      totalWithPromo = totalWithoutPromo - (totalWithoutPromo * .1);
    }
    else if (nbPersonInTable < 10)
    {
      totalWithPromo = totalWithoutPromo - (totalWithoutPromo * .2);
    }
    else
    {
      totalWithPromo = totalWithoutPromo - (totalWithoutPromo * .3);
    }
    return totalWithPromo;
  }

  calculGeneralAmount(amountByTables: number[]): number {
    return Math.ceil(amountByTables.reduce((x,y) => x + y));
  }

  getResult(input: string[]): number {
    this.parsingService.inputString = input;
    const priceByPerson = parseInt(this.parsingService.getFirstEntryStringAndRemoveHer(), 10);
    this.parsingService.removeFirst();
    const numberClientByTable = this.parsingService.inputString.map(line => parseInt(line, 10));
    const amountByTable = numberClientByTable.map(line => this.getPriceByTable(line, priceByPerson));
    return this.calculGeneralAmount(amountByTable);
  }
}
