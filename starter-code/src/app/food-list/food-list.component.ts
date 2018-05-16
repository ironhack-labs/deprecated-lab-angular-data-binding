import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];

  newFoods= {
    name: '',
    calories: '' ,
    image: '',
    quantity: ''
  };

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood() {
    const addedFood = {
      name: this.newFoods.name,
      calories: this.newFoods.calories,
      image: this.newFoods.image,
      quantity: this.newFoods.quantity
    };
    this.foods.push(addedFood);
    console.log('Add contact has been called');
  }

}
