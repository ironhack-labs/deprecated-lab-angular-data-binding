import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: any[] = foods;
  addFoodBool = false;
  newFood = {};
  constructor() { }

  ngOnInit() {
    console.log(foods)
  }


  addFood(){
    this.addFoodBool = !this.addFoodBool
  }
  addFoodSubmit(){
    newFood = {
      name: addFoodName,

    }
  }

}
