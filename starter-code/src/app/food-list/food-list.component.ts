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
  todayFoods = [];
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

  addToTodayList(food, newquantity, calories){
    var controller = true;
    if (typeof this.todayFoods[0] == 'undefined') {
      food.quantity+=newquantity;
      this.todayFoods.push(food)
      this.totalCalories+=calories;
    }else{
    for (var i = 0; i < this.todayFoods.length; i++) {
      if(this.todayFoods[i].name === food.name) {
            this.todayFoods[i].quantity+=newquantity;
            controller=false;
          }
        }
        if(controller){
            food.quantity+=newquantity;
            this.todayFoods.push(food)
            this.totalCalories+=calories;
        }


}


 }

}
