import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  pattern: string;
  todayFoods: Object[] = [{}];
  counter: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addTodaySpecial(e){
    this.todayFoods.push(e)
    const addCalories = Number(e.calories)
    this.counter = this.counter + addCalories;
  }
}
