import { Injectable } from '@angular/core';
import {ParsingService} from './parsing/parsing.service';

@Injectable({
  providedIn: 'root'
})
export class Exercice6Service {
  parsingService: ParsingService;
  inputString: string[];

  constructor(parsingService: ParsingService) {
    this.parsingService = parsingService;
    this.inputString = [];
  }

  isLetter(input: string): boolean {
    return false;
  }

  isNumber(input: string): boolean {
    return false;
  }

  hasSixChar(input: string): boolean {
    return false;
  }

  passIsCorrect(input: string): boolean {
    return false;
  }

  getNbCorrectPassword(input: string[]): number {
    return 0;
  }
}
