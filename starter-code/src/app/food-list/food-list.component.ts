import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Object[];
  pattern: string;
  comida: Object[];
  newFood: Object = {};
  quantity: number;
  totalCalories: number = 0;
  listToday: Object[] = [];
  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }
  addItem(foodName) {
    this.foodsList.push(foodName);
    
    this.newFood = {
      name:"",
      calories:"",
      image:""
    }
  }
  addToday(comida, quantity) {
    this.totalCalories += comida.calories * quantity;
    comida.quantity = quantity;
    this.listToday.push(comida);
  }
}