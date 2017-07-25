import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foods : Object[];
newFood: Object = {};
pattern: String;
show: boolean = false;
  constructor() { }

  ngOnInit() {
     this.foods = foodList;
  }
  toggleShow(){
    this.show = !this.show;
  }
  addFood(){
    console.log("Add food has been called");
    // add contact to contacts list
    this.foods.push(this.newFood)
    this.newFood = {}
    this.show = !this.show;
  }

}
