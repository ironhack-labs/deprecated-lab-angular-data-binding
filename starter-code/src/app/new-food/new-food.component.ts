import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewFoodComponent implements OnInit {
  foods = foods;
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
  }

  addFood(name, image: string, calories: number ){
       let newFood = {
         name: name,
         image: image,
         calories: calories
       }

       foods.push(newFood);
    }







}
