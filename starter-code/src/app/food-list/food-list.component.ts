import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any>;
  newFood: Object = {};
  allFoodToday: Array<any> =[];
  totalCal: number = 0;
  

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    
  }

filterFood(sItem) {
  console.log(sItem.value);
  const mySearch = new RegExp(sItem.value, 'i');
  this.foods = foods.filter(it => it.name.match(mySearch));
 
}

todaysFood(foodItem) {
  console.log(this.allFoodToday, foodItem);

  this.allFoodToday.push(foodItem);
  const foodCalArr = [];
  this.allFoodToday.forEach(food => {
      foodCalArr.push(food.calories)
  })
  this.totalCal = foodCalArr.reduce((a, b) => a + b, 0);
  return this.totalCal;
  

}


addNewFood(name, calories, photo, quantity){
  console.log(name.value, calories.value);
  this.foods.push({
    name: name.value,
    calories: calories.value,
    image: photo.value,
    quantity: quantity.value
  })
 }


}
