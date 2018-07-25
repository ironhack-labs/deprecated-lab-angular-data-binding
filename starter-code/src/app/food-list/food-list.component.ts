import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  [x: string]: any;
  foods: Array <any>;
  todayfoods: Array <any> = [];
  newFood= {};
  newList:Array <any> = [];
  
  constructor() { }

  addFood(){
    console.log("Add food has been called");
    const nF = this.newFood;
    this.foods.push(nF);
    
  }

  addTodayFood(addedFood){

    console.log(addedFood);
    this.todayfoods.push(addedFood)
  }


  findFood(searchThing) {
    
    this.foods.forEach((eachFood) => {
      if (eachFood.name === searchThing.value) {
        this.newList.push(eachFood) 
      }
   console.log (eachFood.name)
    })
  
  }


  ngOnInit() {
  this.foods = foodList;
  }

}