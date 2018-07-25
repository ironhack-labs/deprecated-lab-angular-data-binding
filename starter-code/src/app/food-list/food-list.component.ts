import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  search: string;
  foods = foodList;
  form: any = {};
  show: boolean;
  todayFoods: Array<any> = [];
  sumCal: number;
 
 constructor() { }

  ngOnInit() {}
  
  toggle() {
    this.show = !this.show;
}

  addNewFood() {
    console.log(this.form);
    this.foods.unshift(this.form);
  }
  totalCalories(food) {
    this.todayFoods.push(food);
    this.sumCal = (food.calories * food.quantity);
   }
   