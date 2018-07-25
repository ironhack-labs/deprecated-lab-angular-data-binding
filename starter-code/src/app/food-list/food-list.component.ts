import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any>;
  todayFoods: Array<any> = []
  todayFoodsCalories: Array<number> = [];
  counter 
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  find(searchInput){
    console.log(searchInput.value);
    this.foods = foodList.filter(oneFood=>{
       return oneFood.name === searchInput.value
    });

  }
  showForm(){
    document.getElementById('cooldiv').hidden = false;

  }


    addFood(name, image, calories){
      console.log(name.value, image.value, calories.value);
      this.foods.push({
        name: name.value, 
        image: image.value, 
        calories: calories.value
      })
      
    document.getElementById('cooldiv').hidden = true;
    }

addToTodayList(name, calories){
  this.todayFoodsCalories = [];

  this.todayFoods.push({
    name: name.value,
    calories: calories.value
  });

  
  let that=this;
  this.todayFoods.forEach(function(eachFood) {

    that.todayFoodsCalories.push(Number(eachFood.calories));
  });

  const totalCalories = this.todayFoodsCalories.reduce((total, amount) => total + amount); 
  console.log(totalCalories);
  // Try making an array from the calories values
  //forEach(We will now do an EACH loop to add ALL the calories for every object in the this.todayFoods array. This will be total calories.)
  //total calories will be displayed on the screen, and it should change for every food added to the list.


}


}

