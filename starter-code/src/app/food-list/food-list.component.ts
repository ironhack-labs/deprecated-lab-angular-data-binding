import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  isHidden: boolean = false;
  today: any = [];
  totalCalories: number;

  constructor() {
    this.foods = foods;
  }

  ngOnInit() {
    this.foods = foods;
  }

  addForm() {
    this.isHidden = !this.isHidden;
  }

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.isHidden = !this.isHidden;
  }

  addToday(food) {
    this.today.push(food)
    console.log(this.today)
    this.sumCalories(this.today);
  }

  sumCalories(today) {
  let total = 0
  for (let i = 0; i < today.length; i++) {
    total += today[i].calories
  }
  this.totalCalories = total
  return total
}
}
