import { Bird } from "./bird";

export class Leleka extends Bird{
    constructor (override name: string, override L:number){
        super();
    }

    F() {
        this.food = (this.L * 1) / 2000;
    }
}