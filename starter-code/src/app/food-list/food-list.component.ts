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
  seletFood: Array<object> = [];
  countcalories: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods
    for(let i = 0; i < this.foods.length; i++){
      // this.foods[i].quantity = 1
    }
  }

  addFood() {
    this.foods.push(this.newFood)
  }

  nextFood(food) {
    this.seletFood.push(food)
    this.countcalories += food.calories
  }
  onSubmit(f) {
    console.log(f)
  }
}
