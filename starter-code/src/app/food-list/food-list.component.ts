import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  specialList: Object[] = [];
  cal: number =0;
  newFood: Object = {}

  constructor() { }

  ngOnInit() {
    this.foodList= foods;
  }
  
  addSpecial(food){
    if(this.specialList.indexOf(food) === -1){
    this.specialList.push(food);
    this.cal += food.calories;
    
    console.log(this.specialList)
    }
  }

  addFood(){
    this.foodList.push(this.newFood)
    console.log(this.foodList)
    this.newFood={};
    // this.showForm();
  }

}
