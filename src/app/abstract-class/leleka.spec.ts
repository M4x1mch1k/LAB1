import { Leleka } from "./Class/leleka";
//import { exception } from "console";

describe('Leleka testing', () => {
    let leleka:Leleka;
    beforeEach(()=>{
        leleka = new Leleka ("Leleka", 220);
    })

    fit("Creating class example", ()=>{
        expect(leleka).toBeTruthy();
    })

    fit ("Calculate food for leleka with wingspan of 220cm", ()=>{
        leleka.F();
        let f = leleka.food;
        let fc = (220 * 1) / 2000;
        expect(f.toFixed(3)).toBe(fc.toFixed(3));
    })
});