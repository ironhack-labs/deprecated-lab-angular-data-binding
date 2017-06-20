import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import todaysfoods from '../todaysfoods';
import FoodItem from '../fooditem';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  added: boolean = false;
  todaysfoodsarray: Object[];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.todaysfoodsarray = todaysfoods;
  }

  addtodayfood(food, quantity: number) {
      this.todaysfoodsarray.forEach( (aFood) => {
        if(food === aFood) {
          console.log('hi');
          food.quantity += quantity;
          console.log(food.quantity);
        }
      });
      food.quantity = quantity;

      this.todaysfoodsarray.push(food);

  }

}
