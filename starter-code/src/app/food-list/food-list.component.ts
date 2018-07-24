import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];

  newFood = {
    name: 'foo',
    calories: 42,
    image: 'bar'
  };

  showForm = false;

  searchTerm = '';

  constructor() {
    this.foods = foods;
  }

  handleSaveClick() {
    foods.push(this.newFood);
    this.newFood.name = 'foo';
    this.newFood.calories = 42;
    this.newFood.image = 'bar';
    this.showForm = false;

  }

  ngOnInit() {
  }

}
