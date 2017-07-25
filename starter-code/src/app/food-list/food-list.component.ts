import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object>
  newFood: Object = {};
  isHidden: boolean = true;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  addFood() {
    this.foodList.unshift(this.newFood);
    this.toggleAddFood();
    this.newFood = {};
  }

  toggleAddFood() {
    this.isHidden = !this.isHidden;
  }

}
