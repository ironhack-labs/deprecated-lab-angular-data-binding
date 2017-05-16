import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[];
  todayFoods: any[] = [];
  newFood: any ={};  
  pattern: string;
  formClass:string="hide";
  totalCalories: number = 0;
  quantities:number[] = [];
  
  addToday(index, quantity) {
    let food = this.foods[index];
    
    let ind = this.todayFoods.findIndex(f=>food.name===f.name);

    if(ind!==-1) {
      this.todayFoods[ind].quantity+= parseInt(quantity);
    } else {
      food.quantity = parseInt(quantity);
      this.todayFoods.push(food);
    }
    this.totalCalories = 0;
    this.foods.forEach(f=>this.totalCalories+=f.quantity*f.calories)
  }

  addFood(food) {
    this.foods.push(food);
    this.toggleShowAddFood();
  }

  toggleShowAddFood() {
    this.formClass = this.formClass ? "" : "hide";
  }
  constructor() { }

  ngOnInit() {
    this.foods = foodsList;
    this.foods.forEach((food, index)=>this.quantities[index]=1)
  }

}
