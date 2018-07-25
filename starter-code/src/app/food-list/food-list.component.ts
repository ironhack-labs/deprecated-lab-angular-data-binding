import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todayList = [];
  newFood: Object = {};
  counter: 0;
  hideForm = false;

  ngOnInit() {
    this.foods = foodList;
  }

  handleAddFood() {
    console.log('pushed a new food');
    this.foods.push(this.newFood);
    this.hideForm = true;
  }

  handleAddtoSpecialList(item) {
    console.log('ok');

    this.addToTodayList(item);
    this.calcCalories();
  }

  private addToTodayList (item) {
    this.todayList.push(item);
  }

  private calcCalories () {
    const total = this.todayList.reduce((acc: number, food: any) => acc + food.calories, 0);
    this.counter = total;
  }

}
