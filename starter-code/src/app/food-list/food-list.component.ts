import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  food:Object[];
  foods = {};
  show = false;
  contCalories:number = 0;
  favoriteFood:Object[] = []
  newFavorite = {}
  constructor() { }

  ngOnInit() {
    this.food = foods;
  }
  addFood():void {
    this.food.push(this.foods);
    this.foods = {}
  }
  toogle():void {
    this.show ? this.show=false : this.show=true;
  }
  addFavoriteFood(food, quantity){
    this.contCalories += quantity * food.calories;
    this.newFavorite = {
      name: food.name,
      calories: food.calories,
      quantity
    }
    this.favoriteFood.push(this.newFavorite);
  }
}
