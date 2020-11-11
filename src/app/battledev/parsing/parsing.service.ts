import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParsingService {
  inputString: string[];
  calcString: string[][];

  constructor() {
  }

  removeFirst(): void {
      this.inputString.shift();
  }

  getSecondStringAndRemoveFirst(): string {
    const result = this.inputString[0];
    this.removeFirst();
    return result;
  }

  transformInDoubleTab(): void {
    this.calcString = this.inputString.map(line => line.split(' '));
  }

  transformInTwoTablesAndConvertSecond(): void {

  }
}
