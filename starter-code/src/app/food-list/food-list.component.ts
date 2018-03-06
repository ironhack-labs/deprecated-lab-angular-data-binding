import { Component, OnInit } from '@angular/core';
import comidas from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[] = comidas;
  show = false;
  nuevaComida = {};
  todayList = [];
  totalCalories = 0;

  constructor() { }

  addToday(food) {
    if (this.todayList.indexOf(food)==-1){
      food.quantity++;
      this.todayList.push(food);
    } else {
      this.todayList[this.todayList.indexOf(food)].quantity++;
    }
    console.log(this.todayList);
    let cal = 0;
    this.todayList.forEach(function(food){
      cal+=(food.quantity*food.calories)
    })
    this.totalCalories=cal;
  }

  addFood() {
    if (this.show) {
    this.show = false;
    } else {
    this.show = true;
    }
  }

  pushToFoods() {
    this.foods.unshift(this.nuevaComida);
    this.show = false;
  }

  ngOnInit() {
  }

}
