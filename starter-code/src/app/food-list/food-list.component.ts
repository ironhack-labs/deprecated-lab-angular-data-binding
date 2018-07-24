import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

food: Object[];
newFood: Object = {};
isHidden: boolean = false;
calories: number = 0;
quantity: number;

todaysFood: Object[] = [];


toggleHidden(e){
  this.isHidden = !this.isHidden
}

contenedor = "container";

  constructor() { }

  ngOnInit() {
    this.food = foods;
  }

  addFood(a,b,c){
  console.log("Add food has been called");
  let newFood = {name: a.value, calories: b.value, image: c.value}
  this.food.push(newFood);
  a.value ="";
  b.value ="";
  c.value ="";
}


addToList(e, q){
  console.log("Add food has been called");
  console.log(e.calories);
  let calories = e.calories;
  e.quantity = q.value
  this.todaysFood.push(e)
  this.calories += calories * e.quantity;
}

}
