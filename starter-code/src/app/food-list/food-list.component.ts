import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[] = foods;
  newFood: Object = {};
  showPane: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showNewFoodPane(){
    this.showPane = !this.showPane;
  }

  createNewFood(){
    foods.push(this.newFood);
    this.newFood = {};
  }
}
