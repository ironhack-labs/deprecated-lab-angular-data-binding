import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
   show = false ;
   foods: Object[];
   newFood: Object = {};
   totalCal =0;
   todayFoods:Object[] = [];

  constructor() { }

  ngOnInit() {
    this.foods = foodsList ;
  }

  showForm(){
    if (this.show){
      this.show = false;
    }else{
      this.show = true;
    }
  }

  addFood(food){
    this.foods.push(food);
    this.newFood = {};
    this.show = false;
  }

  addToList(food){
   this.todayFoods.push(food)
   this.totalCal+=food.calories;
  }

}
