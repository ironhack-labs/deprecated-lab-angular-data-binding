import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';

interface foodsInterfaz {
  name: string;
  calories: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-food-list',
  template: `
  `,
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsArr: Object[];
  newFood: Object = {};
  todayFoods: foodsInterfaz[];
  key: string;
  add: string = 'Add New';
  isInputDisabled: Boolean = false;
  color: Boolean = false;
  isActive = true;
  pattern: string;
  tCal: number = 0;

  constructor() { }

  ngOnInit() {
    this.foodsArr = foods;
    this.todayFoods = [] 
  }

  recordAllTheKeyStrokes(event) {
    // console.log(`Key inserted: ${event.key}`);
    this.key = event.key;
    // console.log(`Input value: ${event.currentTarget.value}`);
  }

  toggleInput() {
        this.isInputDisabled = !this.isInputDisabled;
        this.isActive = !this.isActive;
        if (this.isInputDisabled) {
          this.add = 'Activate';
        } else {
          this.add = 'Add New';
        }
        
        
  }
  changeBorder(){
    this.color = !this.color; 
  } 

  addItem(){
    this.foodsArr.push(this.newFood);
    this.newFood = {};
  }

  addItemToList(item,qty){
    let obj;
    this.tCal += item.calories * qty;
    if (this.todayFoods.length === 0) {
      console.log('item.quntity: '+item.quantity+' qty: '+qty)
      item.quantity = Number(qty);
      this.todayFoods.push(item);
    }
    else
    {
      this.todayFoods.map(element => {
        if(element.name === item.name){
           obj = element;
        }
      });
      if(obj) {
        item.quantity += Number(qty);
      }else{
        item.quantity = Number(qty);
        this.todayFoods.push(item);
      }
    }
    console.log('qty: '+qty+' item.quantity: '+item.quantity);
    qty = 0;
  }
  
}

