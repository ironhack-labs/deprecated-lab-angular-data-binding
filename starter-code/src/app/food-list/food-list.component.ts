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
  listOfTodaysFoods:any = {
    totalCalories: Number,
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
    this.listOfFoods.push(newFood);
    this.toggleFoodForm();
  }
  addToSpecial(food){
    this.listOfTodaysFoods.totalCalories += food.calories;
    this.listOfTodaysFoods.specialFoods.push(food);
  }
}
