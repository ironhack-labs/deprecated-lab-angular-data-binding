import { Component, OnInit } from '@angular/core';

import foods from '../foods';
import food from './food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  
  foods: Object[] = foods;
  searched: string = '';
  foodList: Object[] = foods;
  showForm: boolean = false;
  requiredMsg: string = "The field is required";
  showErrorMessages: boolean = false;
  newFood: food = {
    name: '',
    calories: 0,
    quantity: 0,
    image: ''
  };
  processing: boolean = false;
  todayList: Object[] = [];
  totalCalories: number = 0;

  constructor() { }

  ngOnInit() {
  }

  filterFoods(){   
    if(this.searched.length>0){
      this.foodList = this.foods.filter((food: food)=>{
        return food.name.toLowerCase()
                .includes(this.searched.toLowerCase());
      }); 
    } else {
      this.foodList = this.foods; 
    }
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

  togglerrorMessage(){
    this.showErrorMessages = !this.showErrorMessages;
  }

  createFood(form){
    if(form.valid){
      this.showErrorMessages = false;
      this.foods.push(this.newFood);
      this.toggleForm();
    } else {
      this.showErrorMessages = true;
    }    
  }

  addToTodayList(food: food){
    this.todayList.push(food);
    this.totalCalories += food.calories;
  }

}
