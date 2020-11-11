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

    return 0;
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
