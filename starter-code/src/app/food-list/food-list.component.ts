import { Component, OnInit } from '@angular/core';
import comidas from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }
  show= false; 
  foods:Object[] = comidas; 
  nuevaComida = {};
  todayList = []; 
  totalCalories = 0; 

  addToday(food){
    if(this.todayList.indexOf(food)=== -1){
    //this.todayList.find(f=>f.name === food.name){
    food.quantity=1;
    this.todayList.push(food)    
    }else{
      this.todayList[this.todayList.indexOf(food)].quantity++;
    }
    console.log(this.todayList); 
    this.totalCalories+=food.calories; 
  }

  addFood(){
    this.show = true;
  }

  pushToFoods(){
    this.foods.unshift(this.nuevaComida);
    this.show = false; 
  }

  ngOnInit() {
  }

}
