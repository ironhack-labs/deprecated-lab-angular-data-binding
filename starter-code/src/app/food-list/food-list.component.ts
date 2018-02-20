import { Component, OnInit } from '@angular/core';
import foodList from '../foods';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  specialFoodsCalories: number = 0;
  specialFoods: any = [];
  enableForm: boolean = false;
  foods: Array<Object>;
  newFood: Object = {
    name: null,
    calories: null,
    quantity: null,
    image: null
  };

  addFood (newFood) {
    if (!this.enableForm) {
      console.log("hello there")
      this.foods.push(newFood);
      this.newFood = {}
    }
    this.enableForm = !this.enableForm;
  }

  ngOnInit() {
    this.foods = foodList;
  }

  addToSpecial(food) {
    this.specialFoods.push(food);
    this.specialFoodsCalories += food.calories;
  }


}