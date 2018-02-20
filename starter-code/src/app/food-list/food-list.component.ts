import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  pattern: string;
  newFood: any = {};

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  addItem(){
    this.foodList.push(this.newFood);
    this.newFood = {};
  }

}
