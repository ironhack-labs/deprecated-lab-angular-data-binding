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
  newList: Object[] = [];
  active: boolean = false;
  totalCalories:number = 0;
  totQuantity:number=0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

change(){
  this.active =! this.active;
}
  addFood(){
      console.log("Add food has been called");
      this.foods.push(this.newFood)
      this.newFood = {}
    }

  addList(food){
    console.log("Add food to list has been called");
    this.newList.push(food);
    this.totQuantity+=food.quantity;
    this.totalCalories+= food.calories;
  }

}
