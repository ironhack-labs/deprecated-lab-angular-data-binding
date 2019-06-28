import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  foodsList: object[];
  newFood: object = {};
  foodListToday: object[];
  caloriesTotal: number;
  oculto: boolean = true;

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
    console.log(this.foodsList);
    this.foodListToday = [];
    this.caloriesTotal = 0;
  }

  addFood() {
    console.log(this.newFood);

    if (
      this.newFood['name'] !== undefined &&
      this.newFood["calories"] !== undefined &&
      this.newFood["image"] !== undefined
    ) {

      this.foodsList = [this.newFood, ...this.foodsList];
      console.log('dentro');
      console.log(this.foodsList);
    }

    this.newFood = {};
  }

  addFoodToday(food, cantidad) {
    const cantInt = parseInt(cantidad);
    const foodFiltrado = this.foodListToday.filter(foodToday => foodToday === food)
                  .map((foodTodayMap: any) => {
                    foodTodayMap.quantity = foodTodayMap.quantity + cantInt;
                    return foodTodayMap;
                  });

    if (foodFiltrado.length === 0) {
      food.quantity = cantInt;
      this.foodListToday = [...this.foodListToday, food];
    }

    this.caloriesTotal += food.calories * cantidad;

  }

  changeStatus() {
    this.oculto = !this.oculto;
  }
}
