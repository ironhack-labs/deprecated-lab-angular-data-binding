import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[] = foods;
  todayFoods: any[] = [];
  addFoodBool = false;
  newFood: any = {};
  todayFoodTotalCals: number = 0;
  constructor() { }

  ngOnInit() {
    console.log(foods)
  }


  addFood(){
    this.addFoodBool = !this.addFoodBool
  }
  addFoodSubmit(){
    if(this.newFood = {}){
      this.addFood();
      return;
    }
    this.newFood = {
      name: this.newFood.name,
      calories: this.newFood.cals,
      image: this.newFood.pic
    }
    this.foods.push(this.newFood);
    this.newFood = {};
    this.addFood();
  }
  addTodayFood(food){
    this.todayFoods.push(food);
    console.log(this.todayFoods);
    this.todayFoodTotalCals += food.calories;
  }

}
