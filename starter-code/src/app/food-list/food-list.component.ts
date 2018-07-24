import { Component, OnInit } from '@angular/core';
import foods from '../foods';


interface TodayFood{
  name: string;
  quantity: number;
  calories: number;
}
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods: Array<object>;
  textSearch: string;
  newFood: object={};
  formDisplay: string = "none";
  todaysFood: Array<TodayFood> = [];
  todaysCalories: number = 0;

  constructor() { }

  ngOnInit() {
    console.log(foods);
    this.foods = foods;
  }

  showForm(){
    this.formDisplay="initial"
  }

  insertFood(){
    foods.push(this.newFood);
    this.newFood={};
    this.formDisplay="none";
  }

  addButton(food, calories){
    console.log(food)
    let inserted = false;
    this.todaysFood.forEach(e => {
      if (e.name == food){
        e.quantity++;
        inserted=true
      }
    })
    if (!inserted){
      this.todaysFood.push({name: food, quantity: 1, calories: calories});
    }
    this.todaysCalories += calories;
  }

}
