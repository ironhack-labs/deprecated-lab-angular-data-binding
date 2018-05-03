import { Component, OnInit } from '@angular/core';
import { Food, foodList } from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  userInput: string; 
foods : Array<Food> = foodList; 
newFood = new Food();
todayList : Array<object> =[]
lists = Object()

classState : any = {

  formYolo: true
} 

  constructor() { }

  ngOnInit() {
  
  }

  toggleFormClass(){
    this.classState.formYolo = !this.classState.formYolo;
  }

  addFood(){
   this.foods.push(this.newFood)
    // this.newFood = {}
  }

  today(x:object){
    this.todayList.push(x)
  }
  newList(){
    console.log("ok")
    this.lists.push(this.foods)
  }

  caloriesCount(){
    return 
  }
}

class foood {
  constructor(
    public name : string = "", 
    public calories : number = 0 ,
    public image : string = "",
    public quantity : number = 0

  ) {}
}
