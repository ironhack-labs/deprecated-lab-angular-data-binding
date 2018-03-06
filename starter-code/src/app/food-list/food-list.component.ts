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
    display: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm() {
      this.display = !this.display;
  }

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.display = false;
  }
}
