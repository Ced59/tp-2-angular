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

  getGoodAverage(): number {
    return 0;
  }
}
