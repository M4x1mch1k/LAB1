import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  Inputa!:string;

  constructor() {}

  a:number[][] = [];
  n!:number;

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  ras(n:string){
    this.n = parseInt(n);
    var i:number = 0, j:number = 0;
    this.a = Array(this.n);
    console.log("Array created");
    for(i = 0; i<this.n; i++){
      this.a[i] = Array(this.n);
      for(j = 0; j<this.n; j++){
        this.a[i][j] = this.getRandomInt(-10, 10);
      }
    }
  }

  getColor(b:number){
    return b < 0 && b % 2 === 0? 'black' : 'red';
  }
}
