import { FoodsService, IFood } from './../shared/foods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {

  searchTerm: string = '';
  showAddFoodForm: boolean = false;
  foodToAdd: Object = { }; // TODO make IFood

  constructor(private foodsService:FoodsService) { }

  ngOnInit() {}

  get foods() {
    return this.foodsService.foods;
  }

  showAddFood() {
    this.showAddFoodForm = !this.showAddFoodForm;
  }

  submitFood() {
    this.showAddFoodForm = false;
    this.foodsService.foods.unshift(this.foodToAdd as IFood);
    this.foodToAdd = {}
  }

  makeTodaysFood(food:IFood, quantity:number) {
    food.quantity = quantity;
    food.forToday = true;
  }

}
