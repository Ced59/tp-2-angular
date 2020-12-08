import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParsingService {
  inputString: string[];
  calcString: string[][];
  reducedTabOne: string[];
  reducedTabTwo: number[];

  constructor() {
  }

  removeFirst(): void {
      this.inputString.shift();
  }

  getFirstEntryStringAndRemoveHer(): string {
    const result = this.inputString[0];
    this.removeFirst();
    return result;
  }

  transformInDoubleTab(): void {
    this.calcString = this.inputString.map(line => line.split(' '));
  }

  transformInTwoTablesAndConvertSecond(cleanedTab: string[][]): void {
    this.reducedTabOne = cleanedTab.map(line => line[0]);
    this.reducedTabTwo = cleanedTab.map(line => parseInt(line[1],10));
  }

  getCalcString(): string[][]{
    return this.calcString;
  }

  getReduceTableTwo(): number[]{
    return this.reducedTabTwo;
  }

  exercice2ReturnProduct(): string {
    this.removeFirst();
    return this.getFirstEntryStringAndRemoveHer();
  }

}
