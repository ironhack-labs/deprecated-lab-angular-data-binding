import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  food: Object = {};
  visible: Boolean;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm() {
    this.visible = true;
  }

  addFood() {
    this.foods.push(this.food);
    this.food = {};
    this.visible = false;
  }

}
