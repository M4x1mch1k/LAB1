export abstract class Bird{
    name !: string;
    L!: number;
    food !: number;
    constructor () {}
    show(){
        return "Name: " + this.name + " " + "Length: " + this.L + " " + "Food needed: " + this.food.toFixed(3);
    }
    abstract F(): any;
}