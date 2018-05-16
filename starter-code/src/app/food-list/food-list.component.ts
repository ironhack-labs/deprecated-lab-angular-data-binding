import { Component, OnInit } from '@angular/core';
import foods from '../foods'; // creates variable called foods from foods.ts file

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']

})
export class FoodListComponent implements OnInit {
foodList:Array<any> = [];
newFood:any = {name:"",calories:"",image:""};
isFormShowing:boolean = false;
todaysFoods:Array <any> =[];
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
  this.todaysFoods.unshift(theFood)
}

  // constructor() { }

  ngOnInit() {
    // any time the compobnent is called this runs
    this.foodList = foods // foodLiost from the array above, foods from the import above
    // console.log(this.foodList)
  }  
}

