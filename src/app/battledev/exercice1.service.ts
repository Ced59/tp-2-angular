import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Exercice1Service {
  inputsString: string[];
  tabIntPlayerA: number[];
  tabIntPlayerB: number[];
  scoreA = 0;
  scoreB = 0;

  constructor() {
    this.tabIntPlayerA = [];
    this.tabIntPlayerB = [];
  }

  getResult(input: string[]): string
  {
    this.removeFirst();
    this.convert();
    return this.compare();
  }

convert(): void
  {
    for (let i = 0; i < this.inputsString.length; i++)
    {
      let scores: string[];
      scores = this.inputsString[i].split(' ');
      this.tabIntPlayerA[i] = parseInt(scores[0], 10);
      this.tabIntPlayerB[i] = parseInt(scores[1], 10);
    }
  }

  compare(): string
  {
      for (let i = 0; i < this.inputsString.length ; i++)
      {
        if (this.tabIntPlayerA[i] < this.tabIntPlayerB[i])
        {
          this.scoreB++;
        }
        if (this.tabIntPlayerB[i] < this.tabIntPlayerA[i])
        {
          this.scoreA++;
        }
      }

      if (this.scoreA > this.scoreB)
      {
        return 'A';
      }
      else
      {
        return 'B';
      }
  }


  removeFirst(): void {
    this.inputsString.shift();
  }
}
