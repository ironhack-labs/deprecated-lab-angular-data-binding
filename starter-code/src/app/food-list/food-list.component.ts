import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  products: Array<object>;
  newFood: Object = {};
  pattern: string;
  myclasses: any = {
    form: true
  }
  list: Array <object> = [];
  food: Object = {};
  totalCalories: number = 0;
  constructor() { }

  ngOnInit() {
    this.products= foods;
  }
 addFood(){
   this.products.push(this.newFood)
   this.newFood = {}
 }
 addList(food){
   this.list.push(food)
   this.totalCalories += food.calories
 }
}
