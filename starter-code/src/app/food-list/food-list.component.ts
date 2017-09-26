import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input () foods: Object[];
  newFoods: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addfood(){
    console.log("Add food has been called");
    this.foods.push(this.newFoods);

}
