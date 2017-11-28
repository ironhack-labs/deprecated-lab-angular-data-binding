import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Object[] = [];
  newFood: Object = {};
  search: String = '';
  active: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  show() {
    this.active = !this.active;
  }
  addFood(data){
    console.log(this.newFood);
    this.foodsList.push(this.newFood)
    this.newFood = {};
    console.log(this.foodsList);
    this.active = !this.active
  }
}
