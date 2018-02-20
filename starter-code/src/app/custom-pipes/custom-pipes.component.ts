import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

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

  constructor() { 
    this.foodList = foods;
  }

  ngOnInit() {
  }

}