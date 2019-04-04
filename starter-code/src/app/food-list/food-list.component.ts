import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { AppFoodComponent } from 'app/app-food/app-food.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listFood: Array<object> = foods;
  search: string = "";
  image: string;
  name: string;
  calories: number;
  quantity: number;
  todaysFoodArray: Array<object> = [];
  todayFood: object = new AppFoodComponent;
  sumCal:number;

  constructor() { 
    this.sumCal = 0;
  }
    

  ngOnInit() {
  }

  addTodaysFood(food){
    this.todaysFoodArray.push({name:food.name, cal:food.calories  });
    this.sumCal += food.calories
  }



}
