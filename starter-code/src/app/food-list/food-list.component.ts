import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: Array<any> = [];
  todaysFoods: Array<any> = [];
  resultsArray: Array<any> = [];
  isFormShowing = false;
  todaysCalories = 0;
  searchTerm: String = '';

  newFood: any = {
    name: '',
    calories: '' ,
    image: '',
  };

  addNewFood() {
    const theNewFood = {
      name: this.newFood.name,
      calories: this.newFood.calories,
      image: this.newFood.image,
    };
    // Adds to top of the array list.
    this.foodList.unshift(theNewFood);

    // Clears the text from the input boxes.
    this.newFood = {
      name: '',
      calories: '' ,
      image: '',
    };
    // Hides form after the new food is added.
    this.isFormShowing = false;
  }

  toggleForm() {
    // if(this.isFormShowing === false) {
    //   this.isFormShowing = true
    // } else {
    //   this.isFormShowing = false
    // }
    this.isFormShowing = !this.isFormShowing;
  }

  addToTodaysFoods(theFood) {
    this.todaysFoods.unshift(theFood);
    this.todaysCalories += Number(theFood.calories);
  }

  filterFoods() {
    // console.log(this.searchTerm);
    this.resultsArray = this.foodList.filter((food => {
      return food.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    }));
  }

  ngOnInit() {
    this.foodList = foods; // Imports foods from foods.ts
    this.resultsArray = this.foodList;
  }
}
