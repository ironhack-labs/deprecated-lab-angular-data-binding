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
    this.foods.push(this.newFood);
  }
  addTodaySpecials(food) {
    // console.log("AAAAAA");
    console.log(food);
    // this.todaySpecials[0]=food;
    this.calories += food.calories;
    this.todaySpecials.push(food);
    console.log(this.todaySpecials);

  }

}
