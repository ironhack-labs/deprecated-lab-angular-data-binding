import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  food: object = {
    name: 'Food',
    calories: 0,
    image: 'https://i.pinimg.com/736x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2---page-empty-page.jpg'
  };
  visible: boolean;
  totalCalories: number;
  totalFoodsCalories: Array<Object> = [];
  showForm() {
    (this.visible) ? this.visible = false : this.visible = true;
  }

  addFood() {
    foods.push(this.food);
    console.log(this.food);
    this.food = {
      name: 'Food',
      calories: 0,
      image: 'https://i.pinimg.com/736x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2---page-empty-page.jpg'
    };
    this.visible = false;
  }

  ngOnInit() {
    this.foods = foods;
    this.totalCalories = 0;
  }

  countCalories(food) {
    this.totalCalories += food.quantity * food.calories;
    this.totalFoodsCalories.push({ ...food });
    console.log(food);
  }
}
