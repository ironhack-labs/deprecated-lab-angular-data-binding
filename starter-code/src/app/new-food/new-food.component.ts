import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
foods = foods;
newFood: Object = {};
todaysFood = [];
  constructor() {

  }

  ngOnInit() {

  }

addItem(name, calories:number, image:string){
  let newFood = {
  name: name,
  calories: calories,
  image: image
}
foods.unshift(newFood);
}

// addTodayFood(name, calories, image) {
//   this.todaysFood.push(this.newFood)
//   console.log(this.todaysFood);
// }



}
