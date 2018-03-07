import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  showAddFoodForm: boolean = false;
  foods: Object[];
  todayList: Object[];

  constructor() { }
  
  addItem(name, calories, imageUlr) {
    this.foods.push({name: name, calories: calories, image: imageUlr, quantity: 0});
  }

  addToTodayList(foodIndex, qty) {
    if(this.foods.length < foodIndex){
      return;
    }
    
    //super bonus
    let index = this.todayList.findIndex(i => i['name'] === this.foods[foodIndex]['name']);
    if(index === -1){ 
      let addedFood = Object.assign({}, this.foods[foodIndex], {quantity: Number(qty)});
      this.todayList.push(addedFood);
    } else {
      this.todayList[index]['quantity'] += Number(qty);
    }    
  }

  ngOnInit() {
    this.foods = foods;
    this.todayList = [];
  }

}
