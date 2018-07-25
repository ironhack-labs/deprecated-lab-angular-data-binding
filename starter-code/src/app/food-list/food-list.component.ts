import { Component } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  search: string;
  foodlist = foods;
  form: any = {};
  show: boolean;
  todayFoods: Array<any> = [];
  sumCal: number = 0;

  toggle() {
    this.show = !this.show;
  }
  addNewFood() {
    console.log(this.form);
    this.foodlist.unshift(this.form);
  }
  totalCalories(food) {
    this.todayFoods.push(food);
    this.sumCal += (food.calories * food.quantity);
  }
}
