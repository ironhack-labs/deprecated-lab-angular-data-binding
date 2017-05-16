import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  propFood: Object[] = [];

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addFood(){
    console.log("Add food has been called");
    this.foods.push(this.newFood);
    this.newFood = "";
  }

  addCartFood(item) {
    this.propFood.push(item);
    console.log(this.propFood)
  }

}
