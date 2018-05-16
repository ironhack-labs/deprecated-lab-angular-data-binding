import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[] = [];
  newFood: any = {
    name: '',
    calories: '',
    image: '',
    quantity: ''
  };
  todayFoods: Object[] = [];
  newTodayFood: any = {
    name: '',
    calories: ''
  };

  show = false;
  total = 0;
  constructor() {
   }
  ngOnInit() {
    this.foods = foods;
  }

  classArray: Array<string> = ["hideform"];


  showForm(): void {
    this.classArray = [];
    this.classArray.push('showform');
  }
  addNew():void {
    const addedFood = {
      name: this.newFood.name, 
      calories: this.newFood.calories, 
      image: this.newFood.image, 
      quantity: this.newFood.quantity
    };
      this.foods.push(addedFood);
      this.classArray = [];
      this.classArray.push('hideform');
  }

  addToList(foodName, foodCalories): void {
    const newTodayFood = {
      name: foodName,
    calories: foodCalories
  };
  this.show = true;
  this.total += newTodayFood.calories;
  
  this.todayFoods.push(newTodayFood);
  console.log(this.total)
}
}
