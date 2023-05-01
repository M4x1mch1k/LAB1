import { IProduct } from "../interface/iproduct";

export abstract class Product implements IProduct{
    name:string;
    price:number;
    abstract readonly toy:string
    constructor (name:string, price:number){
        this.name = name;
        this.price = price;
    }
}