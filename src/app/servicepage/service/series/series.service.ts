import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getSeries (x:number){
    const limit = 10;
    let sum:number = 0, i = 1;
    do{
      const temp = Math.sin(i * x)/i;
      i++;
      sum = sum + temp;
    }
    while (i<=limit)
    return sum;
  }

  getTab(xn:number, xk:number, h:number){
    let x =xn, y=0.0;
    while (x <= xk){
      y = this.getSeries(x);
      this.xy.set(x, y);
      if(this.logService){
        this.logService.write("x= "+x.toFixed(2)+" y= "+y.toFixed(2));
      }
      x = x+h;
    }
    return this.xy;
  }

}
