import { Injectable } from '@angular/core';
import {ParsingService} from './parsing/parsing.service';

@Injectable({
  providedIn: 'root'
})
export class Exercice2Service {

  parsingService: ParsingService;
  inputString: string[];
  key: string;

  constructor(parsingService: ParsingService) {
    this.parsingService = parsingService;
    this.inputString = [];
  }

  getResult(input: string[]): number
  {
    this.parsingService.inputString = input;
    this.parsingService.removeFirst();
    this.key = this.parsingService.getSecondStringAndRemoveFirst();
    this.parsingService.transformInDoubleTab();
    const cleanedTab = this.cleanTabByKey();
    this.parsingService.transformInTwoTablesAndConvertSecond(cleanedTab);

    return this.getLowerPrice(this.parsingService.getReduceTableTwo());
  }

  cleanTabByKey(): string[][] {
    return this.parsingService.getCalcString().filter(x => x[0] === this.key);
  }

  getLowerPrice(cleanedTab: number[]): number
  {
    cleanedTab.sort();
    return cleanedTab[0];
  }
}
