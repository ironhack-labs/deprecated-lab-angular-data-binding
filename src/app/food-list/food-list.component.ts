import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
    isHidden:   boolean = false;
    foods:      Object[];
    newFood:    Object = {};
    pattern:    string;
    todayFoods: Object[] = [];

  constructor() { }


  ngOnInit() {
    this.foods = foodList;
  }

  addFood(name,calories,quantity,img){
      this.isHidden = !this.isHidden;
   let food = this.foods;
   food.push({name:name,calories:calories,quantity:quantity,image:img});
   console.log(food);

 }

  addTodayFood(name,calories,img){
    this.todayFoods.push({name:name, calories:calories, image:img});
    console.log(this.todayFoods);
  }

}
