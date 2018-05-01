import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[] = foods;
  newFood: Object = {};
  pattern: string;
  todayFood: Array<Object> = [];
  food: Object
  
  constructor() { }

  ngOnInit() {}
  
  clicked(){
    this.foods.push(this.newFood);
    console.log(this.foods);
  }
  today(food){
    console.log(food);
    this.todayFood.push(food);
    console.log(this.todayFood);
  }

}
