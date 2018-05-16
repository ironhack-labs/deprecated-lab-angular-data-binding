import { Component, OnInit } from '@angular/core';
import foods from '../foods'; // creates variable called foods from foods.ts file

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
searchTerm: String = "";
resultsArray: Array<any> = [];
foodList: Array<any> = [];
newFood: any = {name:"",calories:"",image:""};
isFormShowing: Boolean = false;
todaysFoods: Array <any> =[];
todaysCalories: number = 0;

toggleForm(){
  // console.log("is form showing?", this.isFormShowing)
  this.isFormShowing =! this.isFormShowing;
}

addNewFood(){
  const theNewFood = {
    name:this.newFood.name,
    calories: this.newFood.calories,
    image:this.newFood.image
  }
  this.foodList.unshift(theNewFood);
  // empty out form after submit:
  this.newFood = {name:"",calories:"",image:""};
    // console.log("new food", this.newFood);
  this.isFormShowing = false; // toggle the form back to hidden
}

addToList(theFood) {
  // console.log("clicked")
  this.todaysFoods.unshift(theFood);
  this.todaysCalories+=Number(theFood.calories);
}

filterFoods(){
  // console.log(this.searchTerm);
  this.resultsArray = this.foodList.filter((food=>{
    return food.name.toLowerCase().includes(this.searchTerm.toLowerCase());
  }))
}



  ngOnInit() {
    // any time the compobnent is called this runs
    this.foodList = foods // foodLiost from the array above, foods from the import above
    // console.log(this.foodList)
    this.resultsArray = this.foodList; // creates a duplicate of foodlist

  }  
}

