import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  caloriesToday: number = 0;
  newDish: Object = {};
  show: boolean = false;
  newList: Object[] = [];
  constructor() { }
  
  ngOnInit() {
    this.foods = foods;
  }
  
  addDish(){
    this.show = !this.show;
    this.foods.push(this.newDish);
    this.newDish = {
      name: "",
      calories: "",
      image: ""
    };

  }
  formMethod(){
    this.show = !this.show;
  }
  addFood(food, quantity){
    food.quantity = quantity;
    this.newList.push()
    this.caloriesToday += quantity*food.calories;
  }
}
