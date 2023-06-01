import { Component } from '@angular/core';
import { TodoItem } from './todoitems';
import { Model } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(){}
   model =new Model();
   displayAll : boolean =false;
   
  
  getName(){
    return this.model.name;
  }
  getitems(){

    if (this.displayAll) {
      return this.model.items;
    }else{
      return this.model.items.filter(item=> item.action == false);
    }
  }
  addItem(value: any){
    if (value) {
      this.model.items.push({description: value ,action:false});
    }
    else{
      alert("Lütfen bilgi giriniz");
    }
    
  }

}
