import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParsingService {
  inputString: string[];

  constructor() {
  }

  removeFirst(): void {
      this.inputString.shift();
  }

  getSecondString(): string {

    return '';
  }

  transformInDoubleTab(): void {

  }

  transformInTwoTablesAndConvertSecond(): void {

  }
}
