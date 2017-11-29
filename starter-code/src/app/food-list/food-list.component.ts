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
  calories:number = 0;
  quantity:number = 0;
  formNewFood: boolean = true;
  newTodaysFood = [];
  caloriesItems = 0;
  count = 0;

  constructor() {
    this.foods = foods;
  }
  ngOnInit() {
  }
  showFoodForm(){
    this.formNewFood = !this.formNewFood
  }

  addFood(){
  console.log(this.newFood)
    this.foods.push(this.newFood)
    this.formNewFood = !this.formNewFood
    this.newFood = {name:'', image:'', calories:null, quantity:null}

}
todayFood(foodSelected, quantity) {
   this.caloriesItems = 0;

   foodSelected.quantity = quantity.value;

   if(this.newTodaysFood.indexOf(foodSelected) === -1) {
     this.newTodaysFood.push(foodSelected);
   }

   this.newTodaysFood.forEach(e =>{
     this.caloriesItems += e.quantity * e.calories;
   });

}
}
