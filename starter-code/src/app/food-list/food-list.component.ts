import { Component, OnInit } from '@angular/core';
import foods from '../foods';

class Food {
  name:string;
  calories:number;
  quantity:number = 1;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  pattern:string;
  showForm:boolean = false;
  todaysFoods: Array<Food> = [];
  todaysFood: Food = {
    name : "",
    calories : 0,
    quantity : 1
  }
  totalCalories: number = 0;
  addQuantity: number = 1;
  constructor() { 
   
  }

  ngOnInit() {
    this.foods = foods;
  }
  toggleForm(){
    this.showForm = !this.showForm;
  }
  addFood(){
    this.foods.push(this.newFood)
  }
  addTodayFood(food:Food){
    if(this.addQuantity > 0){
      for (let i = 0; i < this.todaysFoods.length; i++ ){
        if(this.todaysFoods[i].name == food.name ){
          this.todaysFoods[i].quantity += this.addQuantity;
          console.log(this.todaysFoods[i])
          return
        }
      }
      this.totalCalories += (food.calories * this.addQuantity);
      this.todaysFoods.push(food)
    } 
  }
}
