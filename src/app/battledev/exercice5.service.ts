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
    return year % 4 === 0;
  }

  isDivBy400(year: number): boolean {
    return year % 400 === 0;
  }

  isDivBy100(year: number): boolean {
    return year % 100 === 0;
  }

  isDivBy4not100(year: number): boolean {
    return this.isDivBy4(year) && !this.isDivBy100(year);
  }

  isBissextile(year: number): boolean {
    if (this.isDivBy4not100(year))
    {
      return true;
    }
    else { return this.isDivBy400(year); }
  }

  getSingleResult(year: number): string {
    if (this.isBissextile(year))
    {
      return 'BISSEXTILE';
    }
    else {
      return 'NON BISSEXTILE';
    }
  }

  getTabResult(input: number[]): string[] {
    return input.map(line => this.getSingleResult(line));
  }

  getResult(input: string[]): string[] {
    this.parsingService.inputString = input;
    this.parsingService.removeFirst();
    const tabNumber = this.parsingService.inputString.map(line => parseInt(line, 10));
    return this.getTabResult(tabNumber);
  }
}
