import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any> = [];
  foodsResults: Array<any> = foods;
  myFoodArr = [];
  newFoods = {name: '', calories: '', image: '', quantity: ''};
  myFood = {name: '', calories: '', image: '', quantity: ''};
  clicked = false;

  search(searchText) {
    this.foodsResults = this.foods.filter(food => {
        return food.name.includes(searchText);
      });
  }

  newFoodForm() {
    this.clicked = true;
  }

  submit() {
    const newOne = {name: this.newFoods.name,
       image: this.newFoods.image,
       calories: this.newFoods.calories,
       quantity: this.newFoods.quantity };
    this.foods.push(newOne);
    this.newFoods.name = '';
    this.newFoods.image = '';
    this.newFoods.calories = '';
    this.newFoods.quantity = '';
    this.clicked = false;
  }

  myFoods(food) {
    const oneFood = {name: food.name, image: food.image, calories: food.calories, quantity: food.quantity};
    this.myFoodArr.push(oneFood);
    console.log('added: ', this.myFoodArr);
  }

  caloriesCount() {
    let totalCalories = 0;
    this.myFoodArr.forEach(food => {
      totalCalories += food.calories;
    })
    return totalCalories;
  }

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

}
