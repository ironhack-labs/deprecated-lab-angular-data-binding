import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  foodsToday: any[] = [];
  newFood: Object = {};
  show: boolean = false;
  count: number = 0;
  todayCount: number = 0;
  calories: number = 0;


  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.foodsToday;
  }

  toggleShowDiv(){
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  addFood(newFood){
    if (this.count === 1) {
      this.toggleShowDiv();
      return;
    }
    this.foods.push(newFood);
    this.newFood = {};
    this.count++;
  }

  addToday(food) {
    console.log(food);
    this.foodsToday.push(Object(food));
    this.todayCount++;
    this.calories += food.calories;
  }

}
