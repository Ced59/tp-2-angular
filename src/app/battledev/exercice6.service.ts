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
    return input.match(/[a-z]/i) != null;
  }

  isNumber(input: any): boolean {
    return !isNaN(input);
  }

  hasSixChar(input: string): boolean {
    return input.length === 6;
  }

  passIsCorrect(input: string): boolean {
    let result = true;

    if (!this.hasSixChar(input))
    {
      result = false;
    }

    if (!this.isLetter(input.charAt(0)))
      {
        result = false;
      }
    if (!this.isNumber(input.charAt(1)))
      {
        result = false;
      }
    for (let i = 2; i < input.length; i++)
    {
      if (!this.isLetter(input.charAt(i)))
      {
        result = false;
      }
    }
    return result;
  }

  getNbCorrectPassword(input: string[]): number {
    let result = 0;
    input.map(line => {
      if (this.passIsCorrect(line))
      {
        result++;
      }
    });
    return result;
  }

  getResult(input: string[]): number {
    this.parsingService.inputString = input;
    this.parsingService.removeFirst();
    return this.getNbCorrectPassword(this.parsingService.inputString);
  }
}
