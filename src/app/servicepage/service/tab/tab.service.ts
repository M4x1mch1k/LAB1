import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getTab(xn:number, xk:number, h:number):Map<number,number>{
    const pi = xk;
    const limit = 10;
    //let x = xn, y = 0.0;

    for (let x = xn; x <= pi; x += h){
      let i = 1;
      let sum = 0;
      while ( i <= limit){
        const term = Math.sin(i * x) / i;
        sum += term;
        i++;
      }
      this.xy.set(x,sum);
      if (this.logService){
        this.logService.write("x= "+x.toFixed(2)+"y= "+sum.toFixed(2));
      }
      const result = sum * (pi - x) / 2;
    }
    return this.xy;

    /*while (x <= xk){
      y = (Math.PI - x)/2;
      this.xy.set(x,y);
      if (this.logService){
        this.logService.write("x= "+x.toFixed(2)+"y= "+y.toFixed(2));
      }
      x=x+h;
    }
    return this.xy;*/
  }
}
