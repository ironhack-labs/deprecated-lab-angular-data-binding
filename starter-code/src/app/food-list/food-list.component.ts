import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: any;
  newFood: any = {name: '',
        calories: '',
        image: '',
        quantity: ''
    };

//   todaysFood: any = {
//         name: this.foods.name,
//         calories: this.foods.calories,
// }
    todaysFood: Object[] = [];
    todaysFoodList: any = {
      theName: '',
      theCalories: '',
    };

    totalCalorie: number;
    showHide: boolean;
    showToday: boolean;
  constructor() {
    this.totalCalorie = 0;
    this.showHide = false;
    this.showToday = false;
  }

  ngOnInit() {
    this.foods = foodList;
  }  

  changeShowStatus(){
    this.showHide = !this.showHide;
  }
changeTodayStatus(){
  this.showToday = !this.showToday;
}

  addFood():void{
    const newItem = {name: this.newFood.name,
       calories: this.newFood.calories,
       image: this.newFood.image,
       quantity: this.newFood.quantity



      }
      this.newFood.name = '';
      this.newFood.calories = '';
      this.newFood.image = '';
      this.newFood.quantity = '';
    this.foods.push(newItem);
    this.showHide = !this.showHide;
  }

  addTodaysList(name, calorie):void{
    console.log(`the name===> ${name}`)
    console.log(`the calorie amount===> ${calorie}`)
    const addOne = {
      theName: name,
      theCalories: calorie
    }

    this.totalCalorie += calorie;
    console.log(this.totalCalorie)

    this.todaysFood.push(addOne);
      if(!this.showToday){
      this.showToday = !this.showToday;
    }
      console.log(this.todaysFood);

  }


}
