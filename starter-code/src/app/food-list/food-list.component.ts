import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<any>;
  mFoods: Array<any>;
  
  todaysFood: Array<any> = [];
  
  newFood: Object = {};
  
  calories:number = 0;

  constructor() { }

  ngOnInit() {
	  this.mFoods = foods;
	  this.foods = this.mFoods;
  }
	
	search(value: string):void{
		
		console.log(value);
		let searchResults:Array<any> = [];
		
		if(value === "")
			this.foods = this.mFoods;
		else{
			//this.foods = [];
			this.foods = this.mFoods;
			
			for(let x = 0; x < foods.length; x++){
				//console.log(value + " " + this.foods[x].name + " : " + this.foods[x].name.includes(value));
				if(this.foods[x].name.toUpperCase().includes(value.toUpperCase())){
					searchResults.push(foods[x]);
				}	
			}
			
			this.foods = searchResults;
		}
	}
	
	addFood(){
		console.log("Add Food has been called");
		this.mFoods.push(this.newFood);
		this.newFood = {};
  }
  
  addFoodToDaily(food){
	  this.todaysFood.push(food);
	  this.calories += food.calories;
  }
}
