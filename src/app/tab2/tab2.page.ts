import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  Inputa!: string;
  Inputb!: string;

  a!: number;
  b!: number;
  d!: number;

  sumNat (n:number){
    var sum = Math.floor(n * (n + 1));
    return sum;
  }

  ras (a:string, b:string){
    this.a = parseFloat(a);
    this.b = parseFloat(b);

    this.d = this.sumNat(Math.floor(this.b/2)) - this.sumNat(Math.floor(this.a-1) / 2);
  }
}
