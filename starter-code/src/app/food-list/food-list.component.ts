import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<object> = foods;
  addFood(input){
    console.log(input);
    const newFood = {
      name: input.name,
      calories: input.calories,
      image: input.image
    }
    foods.push(newFood);
    input.name = "";
    input.calories = 0;
    input.image = 0;
    this.showForm = !this.showForm;
  }
  toggleForm(){
    this.showForm = !this.showForm;
  }
  showForm = false;
  newFood = {};
  todaysFood = [];
  finalArr = [];
  addTodaysFood(food, quantity){
    for (let i = 0; i < quantity; i++){
      this.todaysFood.push(food);
    }
    this.finalArr = this.todaysFood.filter((item, pos) => {
      return this.todaysFood.indexOf(item) == pos;
    })
    this.finalArr.forEach ( e => {
      let counter = 0;
      for(let i = 0; i < this.todaysFood.length; i++){
        if(e.name === this.todaysFood[i].name){
          counter++
        }
        e.numberOf = counter;
      }
    })
  }
  constructor() {}

  ngOnInit() {
  }

}
