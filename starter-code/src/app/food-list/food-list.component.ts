import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Object[];
  pattern: string;
  display: string;

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  addNewFoodForm(){
    this.display = 'true';
  }

  addFoodItem(name, calories, image) {
    this.foodsList.push({name: name, calories: calories, image: image});
    this.display = 'false';
  }
}
