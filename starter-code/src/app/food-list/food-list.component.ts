import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import todayFoods from '../todayFoods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todayFoods: Object[] = [{}];
  newFood: Object = {};
  showForm = true;
  showFood = false;


  constructor() {}
  
  ngOnInit() {
    this.foods = foods;
    this.todayFoods = todayFoods;
  }


  addFood(form){
    foods.push(this.newFood);
    this.newFood = {};
    this.showForm=false
  }
  addTodayFood(e){   
    todayFoods.push(e);
    this.showFood = true;

  }
} 
