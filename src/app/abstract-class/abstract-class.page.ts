import { Component, OnInit } from '@angular/core';
import { Bird } from "./Class/bird";
import { Leleka } from "./Class/leleka";
import { Vorona } from "./Class/vorona";

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {

  bird: Bird[] = [];
  max: number = 0;
  constructor() { }

  getRandomInt(max: number){
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  ras(nn: any){
    this.bird = new Array();
    let n = parseInt(nn);
    for (let i = 0; i < n; i++){
      this.bird.push(new Leleka("Leleka", this.getRandomInt(300)));
      this.bird.push(new Vorona("Vorona", this.getRandomInt(50)));
    }
    this.max = 0;
    this.bird.forEach((element) => {
      element.F();
      if (this.max < element.food) this.max = element.food;
      console.log(element.show())
    });
  }

  getColor(el: number, max: number){
    return (Math.abs(el - max) < 0.01) ? "green" : "";
  }

  ngOnInit() {
  }

}
