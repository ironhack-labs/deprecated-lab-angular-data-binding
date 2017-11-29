import { Component, OnInit } from '@angular/core';
import foodcoma from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFoodplate: Object = {};
  appear = true;
  search: string;
  selected: Array<object> = [];
  totalCal: number = 0;

  ngOnInit() {
    this.foods = foodcoma;
  }
  addFoodplate(){
    this.foods.push(this.newFoodplate);
    this.newFoodplate = {};
    }
  show(){
    this.appear = !this.appear;
  }
  add(i){
    this.selected.push(i);
    console.log(this.selected);
    this.totalCal+=i['calories'];
  }

}
