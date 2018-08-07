import { Component, OnInit } from '@angular/core';
import foodList from './foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: any[];

  newFood: Object = {
      name: '',
      calories: '',
      image: '',
      quantity: ''
  };

  visibleForm = false;
  myFoodList = [];
  cal = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addToList(i){
    this.myFoodList.push(this.foods[i]);
    this.cal += this.foods[i].calories;
  }

  toggleForm(){
    this.visibleForm = !this.visibleForm;
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood = {
      name: '',
      calories: '',
      image: '',
      quantity: ''
    }
    this.toggleForm();
  }
  
}
