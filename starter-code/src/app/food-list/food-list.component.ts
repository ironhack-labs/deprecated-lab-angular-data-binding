import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<Object> = [];
  dailyFoods: Array<Object> = [];
  isHidden: boolean = true;
  dailyCaloryIntake: number;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.dailyCaloryIntake = 0;
  }

  showDiv(): void {
    this.isHidden = false;
  }

  addFood(name, calories, image): void {
    let food = {
      name: name,
      calories: calories,
      image: image,
    }
    this.foods.push(food);
    this.isHidden = true;
  }

  addToDailyList(food): void {
    this.dailyFoods.push(Object.assign({}, food));
    this.dailyCaloryIntake += food.calories;
  }

}
