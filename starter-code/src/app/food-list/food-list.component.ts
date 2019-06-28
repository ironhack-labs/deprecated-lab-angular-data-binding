import { Component, OnInit } from '@angular/core';
import {FoodInterface} from '../food.interface';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<FoodInterface>;
  origFoods: Array<FoodInterface>;
  emptyNewFood: FoodInterface = {
    name: "",
    calories: 0,
    image: "",
    quantity: 1
  };
  newFood: FoodInterface;
  foodCart: Array<FoodInterface>;
  formVisible: boolean = false;

  ngOnInit() {
    this.foods = foods;
    this.foods.map((food) => {food.quantity = 1});
    this.origFoods = this.foods;
    this.newFood = this.emptyNewFood;
    this.foodCart = [];
  }

  toggleDisplayForm() {
    this.formVisible = !this.formVisible;
  }

  addNewFood() {
    this.foods.unshift(this.newFood);
    this.formVisible = false;
    this.newFood = this.emptyNewFood;
  }

  addFoodToCart(food: FoodInterface) {
    if(food.quantity > 0){
      let alreadyInList = this.foodCart.find(f => f.name === food.name);
      if(alreadyInList){
        alreadyInList.quantity += food.quantity;
        this.foodCart = [...this.foodCart];
      } else {
        this.foodCart = [...this.foodCart, {...food}];
      }
    }
  }
}
