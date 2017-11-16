import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewFoodComponent implements OnInit {
    foods: Object[];
newFood: Object = {};
  constructor() { }

  ngOnInit() {
  }
  addfood(){
    this.newFood = {
    
    };
      console.log("Add foods has been called");

      this.foods.push(this.newFood);

      this.newFood = {};
    }
}
