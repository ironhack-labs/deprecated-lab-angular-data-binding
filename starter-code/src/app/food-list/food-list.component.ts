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
  listOfFood: Array<any> = [];
  calorias = 0;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
  }
  listFood(food, cantidad) {
    if(cantidad <=0){
      cantidad =1;
    }
    this.listOfFood.push(food);
    this.calorias += (food.calories*cantidad);

  }

}
