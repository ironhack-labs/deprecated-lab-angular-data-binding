import { Component, OnInit } from '@angular/core';
import { SearchPipe } from '../pipes/search.pipe'
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  //iter 1
  myFoods: Array<any> = foods;

  //iter 2
  searchTerm: string;

  //iter 3
  newFoodFormHidden: boolean;
  toggleNewFoodForm() {
    this.newFoodFormHidden = !this.newFoodFormHidden;
  }
  newFoodName : string;
  newFoodCalories : string;
  newFoodImage : string;
  newFoodQuantity : string;
  addFood() {
    //Create new food
    let newFood = {
      name : this.newFoodName,
      calories : this.newFoodCalories,
      image : this.newFoodImage,
      quantity : this.newFoodQuantity
    };

    //Add food to the list (no validations right now)
    this.myFoods.push(newFood)
    console.log(newFood)

    //Clear inputs
    this.newFoodName = "";
    this.newFoodCalories = "";
    this.newFoodImage = "";
    this.newFoodQuantity = "";
  }

  constructor() { }

  ngOnInit() {
    this.newFoodFormHidden = true;
  }

}
