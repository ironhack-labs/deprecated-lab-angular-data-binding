import { Component, OnInit, } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  clicked: boolean;
  newFood = { name: "", calories: "", image: "" };
  calCount: number;
  todaysFoods = [];
  newTodaysFood: { name: "", calories: "", foodCount: "" }
  filter:string;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.clicked = false;
    this.calCount = 0;
  }

  addFood(): void {
    this.clicked = (!this.clicked);
  }

  submit(): void {
    const element = { name: this.newFood.name, calories: this.newFood.calories, image: this.newFood.image }
    this.foods.push(element);
    this.clicked = (!this.clicked);
  }

  todaysFoodAdd(name: string, calories: string, count: string): void {
    this.calCount += Number(calories) * Number(count);
    let found = false;
    this.todaysFoods.forEach(element => {
      if (element.name === name) {
        element.foodCount = Number(element.foodCount) + Number(count);
        found = true;
        return;
      }
    })

    if (!found)
      this.todaysFoods.push({ name, calories, foodCount: count });
  }

}
