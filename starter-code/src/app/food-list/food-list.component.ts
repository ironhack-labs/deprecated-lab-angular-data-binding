import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Array<any>;
  searchedFoods: any[];
  theSearchTerm: string = "";
  newFoodItem:any = {}; //in the food list component reference the names, calories
  formShowing:boolean = false;

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
    this.searchedFoods = foods;
  }
//function that runs everytime component is loaded on the page, runs when you go to page,

  searchFunction() {
    this.searchedFoods = this.foodsList.filter((foodsearch) => {
      return foodsearch.name.toLowerCase().includes(this.theSearchTerm.toLowerCase());
    })
  }

  addNewFood(){
    this.foodsList.unshift(this.newFoodItem);
    this.newFoodItem = {};
    this.toggleForm();
    console.log(this.newFoodItem);
  }

  toggleForm(){
    this.formShowing = !this.formShowing;
  }

}
