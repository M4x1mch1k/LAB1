import { IShow } from "../interface/ishow";
import { IPurchase } from "../interface/ipurchase";
import { Random } from "./random";
import { Product } from "./product";

export class Dairy extends Product implements IPurchase{
    override toy!: string;

    get company(){
        let rnd = new Random();
        let t = rnd.getRandomInt(3);

        if (t == 0){
            return "Комо"
        }else{
            if (t == 1){
                return "Данон"
            }else{
                return "Рудь"
            }
        }
    }

    constructor(name: string, price: number, shower: IShow){
        super(name, price);
        shower.show("Молочний продукт: " + this.name + ". За ціною: " + this.price + ". Компанії: " + this.company);
    }

    purchase(){
        return "Молочний продукт придбали";
    }
}