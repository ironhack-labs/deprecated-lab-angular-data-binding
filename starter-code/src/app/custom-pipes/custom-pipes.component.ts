import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  name:string;
  calories:number;
  image:string; 
  quantity:number;
  addFoodForm:boolean;
  todayFoodCalories:number;
  todayFood: Array<string>;

  foodList: Object[];
  food: Object = {
    name:this.name,
    calories:this.calories,
    image:this.image,
    quantity:this.quantity
  };

  constructor() { 
    this.foodList = foods;
    this.addFoodForm = false;
    this.todayFoodCalories = 0;
    this.todayFood = [];
  }

  ngOnInit() {
  }

  addFood(name:string,calories:number,image:string){
    this.foodList.push({name,calories,image}) 
  }

  showFoodForm(){
    
     this.addFoodForm = !this.addFoodForm;
  }

  addCalories(calories:number){

    this.todayFoodCalories += calories;

  }

  addFoodToday(foodName:string){
    this.todayFood.push(foodName);
  }


}
