import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  pattern:string = "";
  foods = [];
  newFood: Object = [];
  show:boolean = false;
  todayisFood = [];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm(){
    this.show = !this.show;
  }

  addFood(p) {
    this.foods.push(p);

    console.log("Add food has been called");

    this.newFood = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  todayFood(q){
    console.log(q)
    this.todayisFood.push(q);  
  }
}
