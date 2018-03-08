import {
  Component,
  OnInit
} from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todaySpecials: Object[] = new Array();
  newFood: Object = {};
  searchFood: string = "";
  htmlToAdd: string = "";
  calories: number = 0;
  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }

  newSearch() {
    this.foods = foods;
    this.foods = this.foods.filter((food) => {
      return food["name"].includes(this.searchFood);
    });
  }

  addFood() {
    let boo: boolean = true;
    this.foods.forEach(food => {
      if (this.newFood["name"] === food["name"]) {
        food["name"] += " +1"
        boo = false;
      }
    });
    if (boo)
      this.foods.push(this.newFood);
  }

  addTodaySpecials(food) {
    this.calories += food.calories;
    this.todaySpecials.push(food);
  }

  addQuantity(quantity, food) {
    this.foods.forEach(currentFood => {
      if (food.name === currentFood["name"]) {
        currentFood["quantity"] += Number(quantity);
      }
    });
  }

}
