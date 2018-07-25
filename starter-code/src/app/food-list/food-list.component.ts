import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodlist = foods;
  show: boolean;
  form: any = {};
  myFoods: Array<any> = [];
  quantity: any;
  totalCalories: number = 0;

  todaysFoods(food) {
    this.myFoods.push(food);
    this.totalCalories += (food.calories * food.quantity);
  }

  addNewFood() {
    this.foodlist.unshift(this.form)
  }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
    
  }
  
}
