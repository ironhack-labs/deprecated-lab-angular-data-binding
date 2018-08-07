import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[];
  favFoods: any[];
  foodsCalories: 0;
  newFood: Object = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  }

  showForm = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods; 
    this.favFoods = [];
    this.foodsCalories = 0;   
  }

  addFood(){    
    this.foods.push(this.newFood);
    this.newFood = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    };
  }

  addFavorites(index) {    
    this.favFoods.push(this.foods[index]);
    this.foodsCalories += this.foods[index].calories;
  }
}
