import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object>;
  visible : boolean =false;
  newFood: Object={};
  todayFood= [];
  totalCalories: number =0;

  showAddForm(){
    this.visible=!this.visible;
    console.log("Show form change to: "+ this.visible);
  }

  AddNewFood(){
    console.log("Add new Food");
    console.log(this.newFood);
    this.foodList.push(this.newFood);
    this.showAddForm();
  }

AddTodayFood(food, quant){
  this.totalCalories=0;

  console.log("todayFood clicked");
  food.quantity=quant.value;

  if(this.todayFood.indexOf(food) === -1){
    this.todayFood.push(food);
  }

  this.todayFood.forEach(e =>{
    this.totalCalories+=e.quantity*e.calories;

  })
    //this.totalCalories+=food.calories*quant.value;
}

  ngOnInit() {
    this.foodList=foods;
  }
}
