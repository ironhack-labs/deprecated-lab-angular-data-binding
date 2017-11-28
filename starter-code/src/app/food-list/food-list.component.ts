import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {}
  seletFood: Array<any> = [];
  total: number = 0;

  constructor() {}

  ngOnInit() {
    this.foods = foods
  }

  addFood() {
    this.foods.push(this.newFood)
  }

  nextFood(food, quantity) {
    let indexFood = this.seletFood.indexOf(food);
    food.twice = 1
    if (indexFood == -1){
      this.seletFood.push(food)
    } else {
      this.seletFood[indexFood].twice += 1;
    }
    this.total += food.calories * quantity
  }
}
