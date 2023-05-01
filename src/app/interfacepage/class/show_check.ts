import { IShow } from "../interface/ishow";

export class Show_Check implements IShow{
    info: string = "";
    show(s: string){
        this.info = "Інформація про продукт " + s;
    }
}