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
  foodName: string;
  foodCal: number;
  foodImg: string;
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
  newFood(){
    const newFood = new Object({
      name: this.foodName,
      calories: this.foodCal,
      image: this.foodImg
    });
    this.listOfTodaysFoods.push(newFood);
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
