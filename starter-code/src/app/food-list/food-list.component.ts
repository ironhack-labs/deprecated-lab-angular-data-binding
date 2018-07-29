import { Component, OnInit } from '@angular/core';
// import foodList from '../foods'; DELETED THIS. Getting it from the service
import {FoodService} from '../services/food.service'
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any>;
  theSearchTerm:string;
  todayFoods: Array<any> = []
  todayFoodsCalories: Array<number> = [];
  totalCalories:number = 0; 
  newFood: Object = {};
  constructor(public myService: FoodService) { }

  ngOnInit() {
    this.foods = this.myService.serviceFoodList;
  }



// this.theSearchTerm =

searchFoods(){
  this.foods = this.myService.serviceFoodList.filter((oneFood)=>{
    new RegExp(oneFood,'i');
    return oneFood.name.toLowerCase().match(this.theSearchTerm.toLowerCase());
    // fancy regexp solution

    

    // return oneFood.name === this.theSearchTerm

  });
}




//   find(searchInput){
//     console.log(searchInput.value);
//     this.foods = foodList.filter(oneFood=>{
//        return oneFood.name === searchInput.value
//     });

//   }
  showForm(){
    document.getElementById('cooldiv').hidden = false;

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

   this.totalCalories = this.todayFoodsCalories.reduce((total, amount) => total + amount); 
  console.log(this.totalCalories);
  // Try making an array from the calories values
  //forEach(We will now do an EACH loop to add ALL the calories for every object in the this.todayFoods array. This will be total calories.)
  //total calories will be displayed on the screen, and it should change for every food added to the list.


}


}

