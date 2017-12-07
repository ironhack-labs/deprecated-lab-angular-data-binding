import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  today = new Date();
  foods: Array<Object> = [];
  pattern: string;
  myList: {name: string, calories: number, quantity: number, image: string}[] = [];
  NewListQuantity: number = 0; //initiate the new list's total wuantity of foods.
  newListCalories: number = 0; //initiate the new list's total cal number.

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addToList(myFood, quantityInput){
        const addedFood = this.myList.find(item => item.name === myFood.name);
        const foodQuantity = 1;

        if(addedFood){
          addedFood.quantity += foodQuantity;
        }

        else{
        myFood.quantity = foodQuantity;
        this.myList.push(myFood);
      }

        this.newListCalories += (myFood.calories * foodQuantity);
        this.NewListQuantity ++;
      }
  }
