import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {};
  active : boolean = false;
  calories : number = 0;
  foodToday : Object[]=[];
  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }
  form(){
this.active = !this.active;

  }

  addFood(newFood){
    this.foods.push(this.newFood);

  }

  totalCalories(food){
    console.log(food)
    this.foodToday.push(food);
    this.calories += food.calories;
  }
}
