import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[] = foods;
  foodsDay: Object[] = [];
  newFood: Object = {};
  pattern: string;
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow(){
    this.show = !this.show;
  }
  addFood(){
    console.log("Add contact has been called right now");
    // add contact to contacts list
    let newFood = {
      name : this.newFood['name'],
      image : this.newFood['image'] || "https://i.imgur.com/eTmWoAN.png",
      calories : this.newFood['calories'],
      quantity : this.newFood['quantity']
    }
    foods.push(newFood);
    // clear inputs
    this.newFood = {};
  }
  addTodayFoods(food){
      console.log(this.foodsDay);
    this.foodsDay.push(food);

  }
}
