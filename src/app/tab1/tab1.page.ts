import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  Inputa!: string;
  Inputb!: string;
  Inputc!: string;
  a!: number;
  b!: number;
  c!: number;
  d!: number;

  ras (a: string, b: string, c: string) {
    this.a = parseFloat(a!);
    this.b = parseFloat(b!);
    this.c = parseFloat(c!);

    if ((this.a % 2 == 0) || (this.b % 2 == 0) || (this.c % 2 == 0))
      this.d = Math.pow((this.a + this.b + this.c), 3)
    else
      this.d = Math.pow(this.a, 3) + Math.pow(this.b, 3) + Math.pow(this.c, 3)
  }

}
