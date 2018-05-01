import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object> = foods;
  newFood: Object = {};
  isNewFood: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleInput(){
    this.isNewFood = !this.isNewFood;
  }
  addFood(){
    this.foodList.unshift(this.newFood);
    this.newFood = [];
  }

}

