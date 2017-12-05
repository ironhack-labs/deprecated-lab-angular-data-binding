import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  listOfFoods: any[] = foods;
  isHidden: boolean = true;
  foodQuantity: number = 1;
  listOfTodaysFoods:any = {
    totalCalories: 0,
    specialFoods: []
  }
  constructor() { }

  ngOnInit() {
    console.log(this.listOfTodaysFoods);
  }

  toggleFoodForm(){
    this.isHidden = !this.isHidden;
  }
  newFood(foodName, foodCal, foodImg){
    const newFood = new Object({
      name: foodName,
      calories: foodCal,
      image: foodImg
    });
    this.listOfFoods.push(newFood);
    this.toggleFoodForm();
  }
  addToSpecial(food, foodQuantity){
    const checkForFood = this.listOfTodaysFoods.specialFoods.filter(oneFood => oneFood.name === food.name);
    if(checkForFood.length > 0){
      food.quantity += foodQuantity;
    }else{
      food.quantity = foodQuantity;
      this.listOfTodaysFoods.specialFoods.push(food);
    }
    this.listOfTodaysFoods.totalCalories += food.calories * foodQuantity;
  }
}
