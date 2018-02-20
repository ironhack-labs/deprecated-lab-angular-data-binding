import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  total: number = 0;
  show: boolean = false;
  name: string = "";
  calories: number;
  image: string = "";
  quantity: number = 0;
  newList: Object[] = []
  foods: Object[];
  newFood: Object = {
    name: this.name,
    calories: this.calories,
    image: this.image,
    quantity: this.quantity,
  }
  constructor() { }
  ngOnInit() {
    this.foods = foods;
  }

  addItem() {
    this.foods.push(this.newFood);
    console.log(this.foods)
    this.newFood = {};
  }
  addItemTodayList(food) {
    this.total += food.calories
    this.newList.push(food)
    console.log(this.total)
  }
  toggleForm() {
    this.show = !this.show;
  }

}
