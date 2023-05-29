import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy:number = 0;
  private xy = new Map();

  constructor(@Optional() private logservice: LogService) { }

  getRecursion(x: number, temp: number, n: number, sum: number){
    const limit = 10;
    //let min = -Math.PI, max = Math.PI;
    n++;
    temp = Math.sin(n * x)/n;
    sum = sum + temp;

    if(n < limit){
      this.getRecursion(x, temp, n, sum);
    }else{
      this.yy = sum;
    }
  }

  getTab(xn: number, xk: number, h: number){
    //console.log("hello world");
    const pi = xk;
    let x = xn, y = 0.0;

    while (x <= pi){
      this.getRecursion(x, 0, 0, y);
      this.xy.set(x, this.yy);
      if (this.logservice){
        this.logservice.write("x= "+x.toFixed(2)+" y= "+this.yy.toFixed(2));
      }
      x = x + h;
    }
    return this.xy;
  }
}
