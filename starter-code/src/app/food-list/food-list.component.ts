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
  
  userInput: string;
  constructor() { }
  
  ngOnInit() {
    this.foods = foods
  }
  
  addFoodItem(){
    foods.push(this.newFood)
    this.newFood = "";
  }
}
