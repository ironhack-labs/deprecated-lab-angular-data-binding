import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  name:string;
  calories:number;
  image:string; //"https://i.imgur.com/eTmWoAN.png",
  quantity:number;

  foodList: Object[];
  food: Object = {
    name:this.name,
    calories:this.calories,
    image:this.image,
    quantity:this.quantity
  };

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

}
