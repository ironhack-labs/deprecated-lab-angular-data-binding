import { Component, OnInit } from '@angular/core';
import { foods } from '../../foods'
import { FoodModel } from '../../models/food.model'
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listFood: Array<FoodModel>;
  filterWord: string;
  addFood: FoodModel;
  mustAddFood: boolean;
  listFoodAdded: Array<string>
  totalCalories: number

  constructor() { }

  ngOnInit() {
    this.listFood = foods;
    this.filterWord = '';
    this.addFood = {
      name: '',
      calories: 0,
      image: '',
      quantity: null
    }
    this.mustAddFood = false
    this.listFoodAdded = []
    this.totalCalories = 0;
  }

  mustShowAddFood(): void {
    this.mustAddFood = !this.mustAddFood
    this.cleanInputsFood();
  }

  newFood(): void {
    this.addFood.image = "../../../assets/food.jpg"
    this.listFood.push(this.addFood);
    this.cleanInputsFood();
  }

  cleanInputsFood(): void {
    this.addFood = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    }
  }
  addTolist(food: FoodModel): void {
    if (food.quantity !== 0 && food.quantity !== null && !this.checkFood(food)) {
      this.totalCalories = this.totalCalories + ( food.calories * food.quantity);
      this.listFoodAdded.push(`${food.name} ${food.calories} x ${food.quantity}`);
    }
  }

  checkFood(food: FoodModel): boolean {
    return this.listFoodAdded.some((foodAdded) => foodAdded.includes(food.name));
  }
}


