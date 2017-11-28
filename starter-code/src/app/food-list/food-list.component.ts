import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<object>;
  newFood: Object = {};
  todaysFood: Array<object> = [];
  show: Boolean = false;
  calorieCounter:number = 0;
  showCouter: Boolean = false;
  quantity: number = 1;

  constructor() {}

  addItem(newFood){
    console.log("Add contact has been called");
    this.foods.unshift(newFood);
    this.newFood = {};
    this.show = false;
  }

  formShow(){
    this.show = true;
  }

  addFavFood(foodFav, quantity:number){
    console.log(`${foodFav.name} añadido a lista`);
    console.log(this.foods);

    if (quantity > 0){
    //  this.quantity = quantity;
      let prueba = parseInt(foodFav.quantity);
      foodFav.quantity =  prueba + quantity;
      console.log(foodFav.quantity);
      this.calorieCounter += foodFav.calories*quantity;
      this.showCouter = true;

      if (this.todaysFood.indexOf(foodFav) == -1) {
        this.todaysFood.push(foodFav);
      }
      else {

      }
    }
  }

  ngOnInit() {
    this.foods = foods;
  }

}
