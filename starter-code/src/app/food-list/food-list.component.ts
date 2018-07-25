import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todaysFoods: Array<Any> = [];
  newFood: {} = {};
  show = false;
  totalCal: Number = 0;

  toggleForm(){
    if (!this.show) {
      this.show = true;
    } else {
      console.log('Add food has been called')
      let newObj:{} = {
        name: this.newFood.name,
        calories: this.newFood.calories,
        image: this.newFood.image
      }
      this.foods.push(newObj);
      this.newFood.name = ''
      this.newFood.calories = ''
      this.newFood.image = ''
      this.show = false
    }
  }

  todaysFoodsAdd(name, calories){
    console.log(name, calories)
    this.todaysFoods.push(name);
    this.totalCal += parseInt(calories);
    
  }

  ngOnInit() {
    this.foods = foodList;

  }

}
