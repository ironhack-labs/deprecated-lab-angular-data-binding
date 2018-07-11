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
  newFood: Food = new Food();
  classState: any = {
    hidden: true,
  };

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  toggleForm() {
    this.classState.hidden = !this.classState.hidden;
  }

  addFood() {
    this.foodList.push(this.newFood);
    this.newFood = new Food();
    this.classState.hidden = !this.classState.hidden;
  }
}

class Food{
  name: string;
  calories: number;
  image: string;
  quantity: number;
  }