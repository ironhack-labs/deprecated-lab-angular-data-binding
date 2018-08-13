import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: any;
  pattern: string;
  display: string;
  // objIndex: number;
  // newQuantity: number;
  totalCalories: number = 0;
  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  addNewFoodForm(){
    this.display = 'true';
  }

  addFoodItem(name, calories, image) {
    this.foodsList.push({name: name, calories: calories, image: image});
    this.display = 'false';
  }

  addToList(name, calories, quantity){
    let objIndex = this.foodsList.findIndex((obj => obj.name == name));
    let newQuantity = Number(this.foodsList[objIndex].quantity) + Number(quantity);
    this.foodsList[objIndex].quantity = newQuantity;
    
    let cals = newQuantity * Number(this.foodsList[objIndex].calories);
    this.totalCalories += cals
  }
}
