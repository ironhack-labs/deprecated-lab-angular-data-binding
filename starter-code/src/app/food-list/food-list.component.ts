import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

interface FoodItem {
  name: string,
  calories: number,
  image: string,
  quantity: number,
}

class Food implements FoodItem{
  quantity: number;
  constructor(public name:string, public calories: number, public image:string){
    this.quantity = 1;
  }
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {};
  errorMessage = false;
  showForm = false;
  todayList: FoodItem[] = [];
  totalCalories: number = 0;
  //pattern: string;

  constructor() {}

  ngOnInit() {
    this.foods = foodList;
  }

  // iteration 3
  toggleForm(){
    this.showForm = !this.showForm;
  }
  addFood(food){
    if(food.name !== undefined && food.calories !== undefined && food.image !== undefined){
      food = new Food(food.name,food.calories,food.image);
      this.foods.unshift(food);  // add food to foods list
       // clear inputs
      this.newFood = {};
      this.toggleForm();
    }else{
      this.errorMessage = true;
    }
  }

  // Iteration 4
  addToList(food: Food){
    console.log(food);

    // check if food has already been added in Today List
    if(this.todayList.length){

      let inList = false;
      this.todayList.forEach( e => {
        if(Object.is(e,food)){
          inList = true;
          return inList;
        }
      });

      // add in the list if the food hasn't been added
      if(!inList){
        this.todayList.push(food);
        this.totalCalories += food.calories;
      }

    }else{
      this.todayList.push(food);
      this.totalCalories += food.calories;
    }
  }

}
