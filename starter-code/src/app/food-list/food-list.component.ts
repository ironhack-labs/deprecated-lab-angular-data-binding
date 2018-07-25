import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  totalCalories: number = 0;
  show: boolean = false;
  newFood: Object[] = [];
  todaysFoods: Array<any> = [];

  addFood(){
    let i = 0;
    while (this.foodList[i]){
      if(this.foodList[i] == this.newFood) return;
      else {
        i++;
        this.foodList.push(this.newFood);
        this.newFood = [];
        this.show = false
      }
    }
  }

  showForm(){
    if(!this.show) return this.show = true;
    return this.show = false;
  }

  addQuantity(food){
    this.totalCalories = 0;
    this.todaysFoods.push(food)
    let i = 0;
    while (this.todaysFoods[i]) {
      this.totalCalories += (this.todaysFoods[i].calories * this.todaysFoods[i].quantity);
      i++;
    }
    console.log(this.totalCalories)
  }

  constructor() { }

  ngOnInit() {
    this.foodList = foods
  }

}
