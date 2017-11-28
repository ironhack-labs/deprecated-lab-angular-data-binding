import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  isHidden: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showFormNewFood() {
    this.isHidden = !this.isHidden;
  }

  addNewFood(newFood) {

    if (Object.keys(newFood).length === 0) {
      console.log(newFood);
      return;
    }

    this.foods.unshift({
      name: newFood.name,
      calories: newFood.calories,
      image: newFood.image
    });

    this.showFormNewFood()
  }

}
