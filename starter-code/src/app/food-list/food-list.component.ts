import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
    newFood: any = {};
    foodList: Object[];
    isShown: boolean = true;
  todayFoodList: Array<Object> = [];
  totalCalories: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.foodList = foods;

  }
  addFood(){
    console.log("Add contact has been called");
    console.log(this.newFood);
    this.foodList.push(this.newFood);

    this.newFood = {};

  }

  buttonA(){
    if(this.isShown === true){
          this.isShown = false;
      }else{
        this.isShown = true;
      }
    }

    

  foodToday(theFood){
    if(theFood === this.newFood){
      this.totalCalories += this.newFood.calories;
    }else{
      this.totalCalories += theFood.calories;
    }

    const foodIndex = this.foodList.indexOf(theFood);
    this.todayFoodList.push(theFood)
  }

}
