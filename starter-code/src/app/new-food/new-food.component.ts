import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addFood(name:string, calories:number, image:string){
    let newFood = {
      name: name,
      calories: calories,
      image: image,
      quantity: 0
    }

    foods.unshift(newFood); //adds food item to the top of array
  }

}
