import { IProduct } from "../interface/iproduct";
import { IShow } from "../interface/ishow";
import { IPurchase } from "../interface/ipurchase";

export class Toy implements IProduct, IPurchase{
    name: string;
    price: number;
    amount: number;

    constructor(name: string, price: number, amount: number, shower: IShow){
        this.name = name;
        this.price = price;
        this.amount = amount;

        shower.show("Іграшка на ім'я: " + this.name + ". Коштує: " + this.price + "Кількість: " + this.amount);
    }

    purchase(){
        return "Іграшку придбали";
    }
}