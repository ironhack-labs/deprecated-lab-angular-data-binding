import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  cook: Object = {};
  show: boolean = false;
  food: Object = {};
  todayFood: Object[] = [];
  totalCalories : number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addFood(){
    console.log("Add food has been called");
    this.foods.push(this.cook);
    this.cook = {};
  }
  addTodayFood(mmm, quantity){
    console.log("add today food");
    console.log(this.todayFood.indexOf(mmm))
    if(this.todayFood.indexOf(mmm) == -1){
    mmm.quantity = parseInt(quantity);
    this.todayFood.push(mmm);
    } else mmm.quantity += parseInt(quantity)
    this.totalCalories += mmm.calories*quantity;
  }
}
