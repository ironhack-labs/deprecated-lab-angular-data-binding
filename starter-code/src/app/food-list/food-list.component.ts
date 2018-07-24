import { Component } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent {
  food: any = foods
  newFood: boolean = false
  newFoodObj: any = {}
  todayFood: Array<any> = []
  todayCals: number = 0



  addNewFood() {
    console.log(this.newFoodObj.name + ' ' + this.newFoodObj.calories)
    if (this.newFoodObj.name != undefined && this.newFoodObj.name != '' &&
        this.newFoodObj.calories != undefined && this.newFoodObj.calories != '') {
      this.toggleNewFood()
      this.food.unshift(this.newFoodObj)
      this.newFoodObj = {}
    }
  }


  toggleNewFood() {
    this.newFood = !this.newFood
  }

  addTodayFood(index, quantity) {
    let i = this.todayFood.findIndex(e => e.name == this.food[index].name)
    if (i > -1) {
      this.todayFood[i].quantity = parseInt(this.todayFood[i].quantity) + parseInt(quantity)
    } else {
      this.todayFood.push(this.food[index])
      this.todayFood[this.todayFood.length - 1].quantity = quantity
    }
    this.todayCals += this.food[index].calories * quantity
  }
}
