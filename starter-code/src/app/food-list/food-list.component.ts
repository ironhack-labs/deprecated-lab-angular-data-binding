import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  todayFoods : any =[];
  foods : Object[];
  newFood: Object = {
    quantity : 0
  };
  isInputDisabled:boolean = true;
  showTotal : number;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm(){
    this.isInputDisabled = !this.isInputDisabled;
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood="";
    this.showForm();
  }

  addFoodToday(food){
    this.todayFoods.push(food);
    console.log(this.todayFoods);
    this.totalCalories(this.todayFoods);
  }

  totalCalories(todayFoods){
    let total =0;
    for(let i=0; i<todayFoods.length; i++){
      let x = todayFoods[i].calories;
      total += x;
      console.log(total);

    }
    this.showTotal = total;
    return total;
  }
}
