import { Component, Input, OnInit } from '@angular/core';
import foods from './foods'

class Food {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pattern: string;
  buttonName = "Add Food"
  visibleForm = false;
  foods: Object[] = [];
  todaysFoods: Object[] = [];
  filteredFoods: Object[] = [];

  toggleFoodForm() {
    this.visibleForm = !this.visibleForm
    if (this.buttonName === "Add Food") {
      this.buttonName = "Close Form"
    } else {
      this.buttonName = "Add Food"
    }
  }

  ngOnInit() {
    this.foods = foods
    this.updateFilteredFoodList();
  }

  handleNewTodaysFood(food) {
    this.todaysFoods.push(food)
    console.log("hello", this.todaysFoods)
  }

  handleNewFood(food) {
    this.foods.push(food);
    this.visibleForm = !this.visibleForm;
    this.updateFilteredFoodList();
  }

  updateFilteredFoodList() {
    this.filteredFoods = this.foods.filter((food:Food) => {
      return !this.pattern || food.name === this.pattern
    });
  }

}
