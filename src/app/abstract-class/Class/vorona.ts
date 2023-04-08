import { Bird } from "./bird";

export class Vorona extends Bird{
    constructor (override name: string, override L:number){
        super();
    }

    F() {
        this.food = 0.8 * this.L;
    }
}