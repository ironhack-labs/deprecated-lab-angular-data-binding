import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {
  foods: Array<Object>;
  newFood: Object = new Object();

  constructor() { }

  ngOnInit() {
  }

    addFood(){
      console.log("Add food is OK");
      this.foods.push(this.newFood);
      this.newFood = new Object();
    }
}

class oneFood {
  name: string;
  calories: number;
  image: string;
  quantity: number;
}
