import { TodoItem } from "./todoitems";

export class Model{
    name: string;
    items: TodoItem[];
    constructor(){
        this.name="Serdar";
        this.items=
        [{description:"kahvaltı",action:true},
        {description:"spor",action:true},
        {description:"alışveriş",action:false},
        {description:"Ders",action:false}];
    }
}