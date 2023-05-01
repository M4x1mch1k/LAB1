import { Component, OnInit } from '@angular/core';
import { Show_Cart } from './class/show_cart';
import { Show_Check } from './class/show_check';
import { Toy } from './class/toy';
import { Dairy } from './class/dairy';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show: string = "";
  constructor() { }

  ngOnInit() {
  }

  ras(){
    let show_cart = new Show_Cart();
    let show_check = new Show_Check();
    let toy = new Toy("Doll", 45, 2, show_cart);
    console.log(toy.purchase());
    let dairy = new Dairy("Cheese", 50, show_check);
    this.show = show_check.info;
    console.log(dairy.purchase());

  }

}
