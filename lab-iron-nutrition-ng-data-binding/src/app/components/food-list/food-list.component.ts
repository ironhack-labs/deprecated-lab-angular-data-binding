import { Component, OnInit } from '@angular/core';
import foodList from './foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: any[];

  newFood: Object = {
      name: '',
      calories: '',
      image: '',
  };

  visibleForm = false;
  myFoodList = [];
  cal = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addToList(index,quant){
    let position = this.myFoodList.indexOf(this.foods[index]);
    let quantNum = Number(quant.value);
    
    if(position >= 0) {
      this.myFoodList[position].quantity += quantNum;
      this.cal += Number(this.foods[index].calories) * quantNum;
    }
    else{
      this.foods[index].quantity = quantNum;
      this.myFoodList.push(this.foods[index]);
      this.cal += Number(this.foods[index].calories) * quantNum;
    }
    
  }

  toggleForm(){
    this.visibleForm = !this.visibleForm;
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood = {
      name: '',
      calories: '',
      image: '',
    }
    this.toggleForm();
  }
  
}
