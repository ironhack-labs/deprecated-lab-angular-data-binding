import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { AppFoodComponent } from 'app/app-food/app-food.component';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  image: string;
  name: string;
  calories: number;
  display: boolean = false;
  foodArray: Array<object> = foods;
  newFood: object = new AppFoodComponent();

  constructor() {}

  ngOnInit() {
  }

  addFood() {
    this.foodArray.push(this.newFood);
    this.newFood = new AppFoodComponent();
    this.switchDisplay();
  }

  switchDisplay(){
    this.display = !this.display
  }
}
