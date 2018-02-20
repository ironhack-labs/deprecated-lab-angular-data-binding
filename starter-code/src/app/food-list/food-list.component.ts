import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  pattern: string = "";
  foods = [];
  newFoods: object = [];
  todayFoods = [];
  constructor() {}
show:boolean = false

  ngOnInit() {
    this.foods = foods;
  }
  showNewFormFood(){
this.show = !this.show;
  }
  AddNewFood(p) {
    
    this.foods.push(p);

    //console.log("Add contact has been called");

    this.newFoods = {
      name: "",
      calories: "",
      quantity: "",
      image: ""
    };
  }
  AddTodayFood(q) {
    this.todayFoods.push(q);
  
  }
}
