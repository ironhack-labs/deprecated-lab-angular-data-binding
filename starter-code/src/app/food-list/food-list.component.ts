import { Component, OnInit, Pipe } from '@angular/core';
import foods from '../foods';



@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  todayFood: Array<string> = [];
  newTodayFood: Object = {};
  showform: boolean = false;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }


  addFood(){
    if (!this.showform){
      this.showform = true;
    } else{
      this.showform = false;
    }
  }

  createFood(){
    this.foods.push(this.newFood);
    this.newFood= "";
  }

  todaysFood(food){
    console.log(food)
    this.todayFood.push(food);
  }

  
}
