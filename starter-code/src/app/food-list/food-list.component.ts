import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object [];
  myFoodList: any[] = foodList;
  isFormShowing: Boolean = false;
  todaysFoods: Array <any> = []; 
  todaysCalories:number = 0;
  resultsArray: Array<any> = [];
  searchTerm: String = "" ;
  aNewFood: any = { theDish: '', theCals: '', image: ''};

  constructor() { }

  ngOnInit() {
    this.resultsArray = this.myFoodList;
  }

  toggleForm(){
    if(this.isFormShowing === false) {
      this.isFormShowing = true;
    } else {
      this.isFormShowing = false;
    }

  }


  // aNewFood = { theDish: '', theCals: '', image: ''};

  addFood() {
    // add foods to list
    const newFoods = {
      theDish: this.aNewFood.theDish,
      theCals: this.aNewFood.theCals,
      image: this.aNewFood.image
    };
    // clear inputs
    this.myFoodList.unshift(newFoods);
    this.aNewFood = { theDish: '', theCals: '', image: ''};
    this.isFormShowing = false;
  }
    
    addToList(theFood) {
    this.todaysFoods.unshift(theFood);
    this.todaysCalories += Number(theFood.calories);
    }

    filterFoods() {
      this.resultsArray = this.myFoodList.filter((food => {
        return food.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      }));
    }
}




