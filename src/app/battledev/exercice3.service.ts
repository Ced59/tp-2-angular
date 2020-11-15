import { Injectable } from '@angular/core';
import {ParsingService} from './parsing/parsing.service';

@Injectable({
  providedIn: 'root'
})
export class Exercice3Service {
  parsingService: ParsingService;
  inputString: string[];

  constructor(parsingService: ParsingService) {
    this.parsingService = parsingService;
    this.inputString = [];
  }

  getGoodAverage(inputValue: string[][]): number {
    const tabAverages = inputValue.map(line => (
      Math.ceil(
        (parseInt(line[0], 10) +
            parseInt(line[1], 10) +
            parseInt(line[2], 10)) / line.length)));
    return Math.max(...tabAverages);
  }
}
