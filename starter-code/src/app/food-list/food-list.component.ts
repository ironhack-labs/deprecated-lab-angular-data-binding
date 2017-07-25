import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  newFood: any = {};
  foods: Array<Object>;
   Show: boolean = false;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addFood(){
    console.log("Add contact has been called");
    console.log(this.newFood);
    this.foods.push(this.newFood);

    this.newFood = {};
  }
  buttonA(){
   console.log("button activated")

         this.Show = !this.Show;
       }
}
