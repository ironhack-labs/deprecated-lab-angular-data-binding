import { Component, OnInit } from '@angular/core';
import foods , {IFood} from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foodList: IFood[];
  todayList: IFood[];
  todayCalories: number;
  quantity: number;
  newFood: IFood = {name: '', calories: 0, image: '', quantity: 0};
  search: string;
  errorMessage: string;
  showForm: boolean;

  constructor() { }

  ngOnInit() {
    this.showForm = false;
    this.foodList = foods;
    this.todayList = [];
    this.todayCalories = 0;
  }

  showFormFn() {
    if (this.showForm) {
      this.showForm = false;
    }else {
      this.showForm = true;
    }
  }

  addFood() {
    const {name, calories, image, quantity} = this.newFood;
    this.errorMessage = '';
    if ( name !== '' || calories !== 0 || image !== '') {
      this.foodList.push(this.newFood);
      this.showForm = false;
      this.newFood = { name: '', calories: 0, quantity: 0 , image: ''};
    }else {
      this.errorMessage = 'All fields are required!';
    }
  }

  addTodayFoodFn(food, qty) {

    this.todayCalories += (food.calories * food.quantity);

    const FoodInList = this.todayList.find(i => i.name === food.name);

    if (FoodInList) {
      FoodInList.quantity += +qty;
    } else {
      this.todayList.push(food);
    }

  }

}
