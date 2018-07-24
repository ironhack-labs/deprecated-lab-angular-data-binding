import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todayList = [];
  todayFood: Object = {};
  newFood: Object = {};

  caloriesArray = [];
  counter: 0;


  hideForm = false;
  ngOnInit() {
    this.foods = foodList;
  }

  handleAddFood() {
    console.log('pushed a new food');
    this.foods.push(this.newFood);
    this.hideForm = true;
  }

  handleAddtoSpecialList(itemName, itemCalories, itemImage) {
    console.log('ok');
    const objectToPush = {
      name: itemName,
      calories: itemCalories,
      image: itemImage,
    };

      this.caloriesArray.push(itemCalories);
      const total = this.caloriesArray.reduce((a: number, b: number) => a + b, 0);
      this.counter = total;


    this.todayList.push(objectToPush);
  }

}
