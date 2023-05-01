import { Show_Check } from "./show_check";
import { Show_Cart } from "./show_cart";
import { Toy } from "./toy";
import { Dairy } from "./dairy";

describe("Toy and Dairy Testing", () => {
    let shower: Show_Cart;
    let shower1: Show_Check;
    let toy: Toy;
    let dairy: Dairy;

    beforeEach(() => {
        shower = new Show_Cart();
        shower1 = new Show_Check();
        toy = new Toy("Car", 40, 3, shower);
        dairy = new Dairy("Milk", 80, shower);
    })

    it("Створення екзепляру класу Cart", () => {
        expect(shower).toBeTruthy();
    })

    it("Створення екзепляру класу Check", () => {
        expect(shower1).toBeTruthy();
    })

    it("Створення екзепляру класу Toy", () => {
        expect(toy).toBeTruthy();
    })

    it("Створення екзепляру класу Dairy", () => {
        expect(dairy).toBeTruthy();
    })

})