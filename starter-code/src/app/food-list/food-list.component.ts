import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  showform = false;
  todaysFoods =[];
  calorieCount: number = 0;
  foodRepeat = false;

  constructor() {
   }
   
  ngOnInit() {
    this.foods = foods;
  }

  addFood(){
    console.log("Add food has been called");
    console.log(this.newFood);
    
    // add contact to contacts list
    this.foods.push(this.newFood);
    this.showform = false;
    // clear inputs
    this.newFood = {};
  }

  addFav(food){
    console.log('added as fav' + food.name);
    this.checkList(food);
    if(this.foodRepeat === false){
    this.todaysFoods.push(food);
    } 
    else{
    this.calorieCount += (food.calories * food.quantity);
    this.foodRepeat = false;
    console.log(this.todaysFoods);
    }
  }

  checkList(food){
    for(let i=0; i<=this.todaysFoods.length; i++ ){
    if(food === this.todaysFoods[i]){
    this.todaysFoods[i].quantity += food.quantity;
    {console.log('same food added ')};
    this.foodRepeat = true;
    console.log(this.foodRepeat);
      }
    }
  }
}
