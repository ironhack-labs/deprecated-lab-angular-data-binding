import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todayMenu: Object[];
  showForm: Boolean = false;
  newDish: Object = {};
  totalCalories: number;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.todayMenu = [];
  }

  addForm() {
    this.showForm = !this.showForm;
  }

  addDish(){
    console.log("Add Dish has been called");
    // add contact to contacts list
    this.foods.push(this.newDish);
    // clear inputs
    this.newDish = {};
  };

  addToMenu(i) {
      console.log("Add to menu has been called");
      this.todayMenu.push(this.foods[i]);
      this.foods[i]['quantity']++;
      console.log(this.todayMenu);
      this.todayMenu.forEach((e) => {
        console.log(e['calories']);
        this.totalCalories =+ e['calories'];
      });
      console.log(this.todayMenu);
      console.log(this.totalCalories);
    };
    
};
