import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[];
  newFood: Object = {};
  show: boolean = false;
  todayList: any[] = [];
  totalCalories: number = 0;
  quantity: number = 1;


  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  showButton(){
    this.show = true;
  }
  addFood(){
    console.log("Add Food has been called");
    this.foods.push(this.newFood);
    console.log('foods:', this.foods);
    this.show=false;
    // add contact to contacts list
    // clear inputs
  }
  addTodayList(food){
    console.log(food);
    let found = 0;

    if(food.quantity > 0){
      if(this.todayList.length>0){
        this.todayList.forEach((today)=> {
          console.log("today's name", today["name"]);
          if(today["name"] == food.name){
            today["quantity"]= food.quantity;
            found = 1;
          }
          if(!found) this.todayList.push(food);
          this.totalCalories+=food.calories * food.quantity;
        })
      } else {
        this.todayList.push(food);
        this.totalCalories += food.calories * food.quantity;

      }
    }
  }
  addquantity(i){
    console.log(this.foods[i])
    this.foods[i]["quantity"] += this.quantity;
    console.log(this.foods[i])
  }


}
