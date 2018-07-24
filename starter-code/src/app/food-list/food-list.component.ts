import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  products: Array<object>;
  pattern: string;
  newFood: Object = {};
  food: Object = {};
  myclasses: any = {
    form: true
  }
  list: Array<object>=[];
  totalCalories: number = 0
  constructor() { }

  ngOnInit() {
    this.products = foods;
  }
  addFood(){
    this.myclasses.form = !this.myclasses.form;
    console.log("Add contact has been called");
    this.products.push(this.newFood)
    this.newFood = {}
  }

  addToList(food, q){
    if(!this.list.some(e=> e['name']=== food.name))this.list.push(food);
    food.quantity += parseInt(q);
    this.totalCalories += food.calories * food.quantity;
  }
}
