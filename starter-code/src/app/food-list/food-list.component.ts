import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[];
  newFood:any =  {};
  show: boolean = false;
  todaysList: any[] = [];
  totalCalories: number = 0;
  quantity: number = 1;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm(){
    this.show = this.show ? false : true;
  }
  addFood(){
    console.log("Add contact has been called");

    this.newFood["quantity"] = 1;
    this.foods.push(this.newFood);
    this.show = false;
  }

  addTodayFood(food){
    console.log(food.quantity);
    var found = 0;

    if(food.quantity > 0){

      if(this.todaysList.length>0){
      this.todaysList.forEach((today)=> {
        console.log("today's name", today["name"]);
        console.log("food's name", food.name);
        if(today["name"] == food.name){
          today["quantity"]= food.quantity;
          found = 1;
        }

      });
      if(!found) this.todaysList.push(food);
      this.totalCalories+=food.calories * food.quantity;
    } else {
      this.todaysList.push(food);
      this.totalCalories+=food.calories * food.quantity;
    }
    }

    }


  updateQuantity(i){
    this.foods[i]["quantity"]+= this.quantity;
  }
}
