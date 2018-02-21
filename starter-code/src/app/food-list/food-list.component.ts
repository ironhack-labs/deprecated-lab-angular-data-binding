import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods = foods;
  food:object = {};
  show:boolean = false;
  specialFoodsCalories: number = 0;
  specialFoods: any = [];

  constructor() { }

  ngOnInit() {
  }

addItem (food) {
  if(this.show) {
    foods.push(food);
  }
  this.show = !this.show;
}

addToSpecial(food) {
  this.specialFoods.push(food);
  this.specialFoodsCalories += food.calories;
}
}
