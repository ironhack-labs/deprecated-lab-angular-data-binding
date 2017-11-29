import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: object[];
  pattern: string;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addItem(name, calories, img) {
    this.foods.push({ name: name, calories: calories, image: img });
  }

}
