import { Vorona } from "./Class/vorona";
//import { exception } from "console";

describe('Vorona testing', () => {
    let vorona:Vorona;
    beforeEach(()=>{
        vorona = new Vorona ("Vorona", 25);
    })

    fit("Creating class example", ()=>{
        expect(vorona).toBeTruthy();
    })

    fit ("Calculate food for vorona with higth of 25cm", ()=>{
        vorona.F();
        let f = vorona.food;
        let fc = 0.8 * 25;
        expect(f.toFixed(2)).toBe(fc.toFixed(2));
    })
});