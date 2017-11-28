import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  calories:number = 0;
  quantity:number = 0;
  formNewFood: boolean = true

  constructor() {
    this.foods = foods;
  }
  showFoodForm(){
    this.formNewFood = !this.formNewFood
  }

  addFood(){
  console.log(this.newFood)
    this.foods.push(this.newFood)
    this.formNewFood = !this.formNewFood
    this.newFood = {name:'', image:'', calories:null, quantity:null}

}
  ngOnInit() {
  }

}
