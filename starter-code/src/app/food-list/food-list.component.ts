import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

interface FoodItem {
  name: string,
  calories: number,
  image: string,
  quantity: number,
}

class Food implements FoodItem{
  quantity: number;
  constructor(public name:string, public calories: number, public image:string){
    this.quantity = 0;
  }
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {};
  errorMessage = false;
  //pattern: string;

  constructor() {}

  ngOnInit() {
    this.foods = foodList;
  }

  addFood(food){
    if(food.name !== undefined && food.calories !== undefined && food.image !== undefined){
      food = new Food(food.name,food.calories,food.image);
      this.foods.push(food);  // add food to foods list
       // clear inputs
      this.newFood = {};
    }else{
      this.errorMessage = true;
    }
  }

}
