import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsArray:Object[];
  isInvisible:boolean;
  todayArray:Object[];
  totalCalories:number;
  counter:number;
  


  constructor() { }

  ngOnInit() {
    this.isInvisible = true;
    this.foodsArray=foods; // este "foods" es la base de datos y el otro es el array definido en la clase
    this.todayArray=[];
    this.totalCalories = 0;
    this.counter = 0;
  }
  toggle(){
    if(this.isInvisible == false){
      this.isInvisible = true;
    }else{
      this.isInvisible = false;
    }
  }
  addFood(name, calories, quantity ){
    this.foodsArray.unshift({ name, calories, quantity }); // que no se olvide meterlo como un OBJETO
    this.toggle();
  }
  addTodayFood(food){
    this.todayArray.push(food);
    this.counter ++;
    this.totalCalories += food.calories * this.counter;
    
    
    console.log(food)
  }


}
