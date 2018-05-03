import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
 foods: Object[];
 specialFood: Array<string> = [];
 newFood: Object = {};
 count: number = 0;
 quantity: number = 0;
 newListFood: Array<string> = [];
 showAddFood: boolean;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.showAddFood = false;
  }



  addFood(){
    console.log("Add contact has been called");
    this.foods.push(this.newFood);
    this.newFood = {};
    console.log(this.foods);
    
    if (this.showAddFood) {
      this.showAddFood = false;
    }
  }

  showForm() {
    this.showAddFood = true;
  }
  addToSpecial(foods) {
    console.log("food has been added to the special list");
    
    this.specialFood.push(foods);
    
    const noDuplicateFoodItems = Array.from(new Set(this.specialFood));
    console.log(noDuplicateFoodItems);
    this.showAddFood = true;
    this.count += foods.calories;
    this.quantity += foods.quantity;
     
    
     }

}
