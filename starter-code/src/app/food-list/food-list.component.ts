import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  myfoods: Object[];
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.myfoods = foods;
  }
  showForm(){

  }
  addFood(){
    this.myfoods.push(this.newFood);
  }

}
