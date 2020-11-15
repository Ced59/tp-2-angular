import { Injectable } from '@angular/core';
import {ParsingService} from './parsing/parsing.service';

@Injectable({
  providedIn: 'root'
})
export class Exercice5Service {
  parsingService: ParsingService;
  inputString: string[];

  constructor(parsingService: ParsingService) {
    this.parsingService = parsingService;
    this.inputString = [];
  }

  isDivBy4(year: number): boolean {
    return false;
  }

  isDivBy400(year: number): boolean {
    return false;
  }

  isDivBy100(year: number): boolean {
    return false;
  }
}
