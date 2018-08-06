import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  // todaysFoods: Object[];

  todaysFoods: Object[] = [];
  display = 'display-none'
  display2 = '';
  todaysCalories: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods
  }

  showAddFoodForm(){
    this.display = '';
    this.display2 = 'display-none'
  }

  addFood(form){
    foods.push(form.value);
    this.display = 'display-none';
    this.display2 = ''
  }

  addTodayFood(food, form){
    for (let i=1; i<=form.value.quantity; i++){
      food.quantity++
      if (this.todaysFoods.indexOf(food)>=0){
        this.todaysCalories += food.calories;
        console.log(this.todaysFoods[this.todaysFoods.indexOf(food)])
      } else{
        this.todaysFoods.push(food);
        this.todaysCalories += food.calories;
      }
    }
  }

}
