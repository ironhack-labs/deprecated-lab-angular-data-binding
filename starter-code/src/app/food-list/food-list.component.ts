import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

    foodList:any[] = foods;
    newFood: any = {};
    newList: any = [];


  constructor() { }

  ngOnInit() {
  }

  addFood(){
    console.log('Add food has been called');

    let newFood = {
      name: this.newFood.name,
      image: this.newFood.image,
      calories: this.newFood.calories,
      quantity: 0
    }

    this.foodList.push(this.newFood);
    this.newFood = {};
  }


  x = true;
  showForm() {

    if (this.x === true) {
      this.x = false;
    }
    else {
      this.x = true;
    }
  }
  currentCalories:number = 0;

  addToList(oneFood){
    this.currentCalories += oneFood.calories;

    console.log('Calorie Count');
    console.log(this.currentCalories);

    this.newList.push(oneFood);
  }

}
