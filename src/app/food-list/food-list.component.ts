import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  isEditing: boolean = false;
  newFoodName: string = "Example Name";
  newFoodCalories: number = 250;
  newFoodImage: string = "http://i.imgur.com/V3EjZBR.jpg";

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  enableUserToAddFood(){
    this.isEditing = !this.isEditing;
  }


  addFood(newFood){
    console.log(newFood);

    this.foods.unshift(newFood);

    this.isEditing = false;
    this.newFoodName = "";
    this.newFoodCalories = null;
    this.newFoodImage = "";
  }

}
