import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import todaySpecial from '../todaySpecial';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  pattern: string;
  todaySpecial: Object[];
  counter: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.todaySpecial = todaySpecial;
  }

  addTodaySpecial(e){
    this.todaySpecial.push(e)
    console.log(e);
    const addCalories = Number(e.calories)
    this.counter = this.counter + addCalories;
  }
}
