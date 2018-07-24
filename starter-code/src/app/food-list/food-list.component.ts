import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<object> = foods;



  constructor() { }

  ngOnInit() {
  }

}


//  {
//     name: "Pizza",
//     calories: 400,
//     image: "https://i.imgur.com/eTmWoAN.png",
//     quantity: 0
//   }