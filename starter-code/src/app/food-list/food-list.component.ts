import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  noVisible: boolean;
  listFood: Object[];
  caloriesCount: number;

  constructor() {
    this.noVisible = true;
    this.listFood = [];
    this.caloriesCount = 0;
   }

  ngOnInit() {
    this.foods = foods;
  }

  showForm() {
    if( this.noVisible ) {
      this.noVisible = false;
    } else {
      this.noVisible = true;
    }
  }

  addFood($event, name, calories, image) {
    this.foods.unshift({
      name,
      calories,
      image
    })

    this.showForm();
  }

  addList($event, food, quantity) {
    this.listFood.push({
      name: food.name,
      calories: food.calories,
      quantity
    });

    this.caloriesCount += (food.calories * quantity);
  }
}
