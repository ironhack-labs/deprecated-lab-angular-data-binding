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
  shown: boolean = false;
  todayFood: Array<Object> = [];
  totalCaloriesSum: number;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood = "";
    this.toggleForm()
  }

  toggleForm () {
    this.shown = !this.shown;
  }

  addToday(name, calories){
   this.todayFood.push([name, calories]);
   this.totalCalories();
 }

 totalCalories(){
   this.totalCaloriesSum = 0;
   this.todayFood.forEach((elem) => {
     this.totalCaloriesSum += parseInt(elem[1])
   })
 }
}
