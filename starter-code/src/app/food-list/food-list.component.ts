import { Component, OnInit } from '@angular/core';
import { foods , Foods } from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  userInput: string;
  selectedFood: string;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }
}
