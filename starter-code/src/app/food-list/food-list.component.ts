import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  
  foods : Array<Object> = foods;

  newFood : Object = {}

  visible:boolean  = false;

  addFood(){
    this.visible = !this.visible;
    this.foods.push(this.newFood)
    this.newFood={};
  }
  show(){
    this.visible = !this.visible;
  }
  constructor() { }

  ngOnInit() {
  }

}
