import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newfood: Object = {};
  todayFoods: Array<Object> = [];
  //todayFood: Object ={};
  isFormVisible : boolean =false;
  totalCalories: number =0;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm(){
    this.isFormVisible = !this.isFormVisible;
  }

  createElement(){
      this.foods.push(this.newfood);
  }

  addToTodayList(food, newquantity, todayfood, calories){
    if (typeof this.todayFoods[0] == 'undefined') {
      food.quantity+=newquantity;
      this.todayFoods.push(todayfood)
      this.totalCalories+=calories;
    }else{
    for (var i = 0; i < this.todayFoods.length; i++) {
      if (typeof this.todayFoods[0] == 'undefined') {
        food.quantity+=newquantity;
        this.todayFoods.push(todayfood)
        this.totalCalories+=calories;}
        else if(this.todayFoods[i] === food) {
            food.quantity+=newquantity;
        }else{
            food.quantity+=newquantity;
            this.todayFoods.push(todayfood)
            this.totalCalories+=calories;
        }
      }

}

  }

  addQuantity(food, newquantity){
    food.quantity+=newquantity;
  }
}
