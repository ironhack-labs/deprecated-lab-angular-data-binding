import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  display: boolean = false;
  newFood: Object = {};
  todayFoods: object[];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm() {
    this.display=true;
  }

  addItem () {
    if (this.display === true) {
      this.foods.push(this.newFood);
      this.display = false;
    } 
    
  }

  addToday(todayFood) {
    this.todayFoods.push(todayFood);
  }
}
