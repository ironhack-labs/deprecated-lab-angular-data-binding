import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: Array<Object>;
  newFood: Object = {};
  todayFood: Array<Object> = [];
  todayCalories: number = 0;
  search: string = "";

  ngOnInit() {
    this.foodList = foods;
  }
  addFood(food: Object): void{
      console.log("Add food has been called");

      this.foodList.push(this.newFood);
      this.newFood = {};
    }
  toggleForm(): void{
    let x = document.getElementById("showForm");
    if (x.style.display === "none"){
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  addTodayFood(food: Object, qty: number):void{
    food['quantity']=qty;
    this.todayCalories += qty*(food['calories']);
    this.todayFood.push(food);
  }
}
