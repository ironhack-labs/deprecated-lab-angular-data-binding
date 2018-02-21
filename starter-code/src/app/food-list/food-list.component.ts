import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  food : Array<Object> = [];
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
    this.food = foodsList;
  }
  addFood(event){
    this.food.push(this.newFood);
    this.newFood="";
  }
}
