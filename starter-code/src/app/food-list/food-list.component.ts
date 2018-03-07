import { Component, OnInit } from '@angular/core';
import comidas from '../food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }
  show = false;
  foods: Array<Object> = comidas;
  newfood: Object = {};
  todayFoods = [];
  totalCalories:number=0;


  addFood() {
    this.show = true;
   
  }

  addFoodtotheList(){
    this.foods.unshift(this.newfood);
    this.show=false;
    this.newfood={};
  }

  addTodayFood (f){
    console.log(f);
    if(this.todayFoods.find(food=>{
      food.name===f.name;
      food.quantity+=f.quantity;
    });){
     
      this.totalCalories+=f.calories*f.quantity;
     // f.quantity+=1;
    }else{
     // f.quantity+=1;
      this.todayFoods.push(f);
      this.totalCalories+=f.calories*f.quantity;

    }
  }
  ngOnInit() {
  }

}
