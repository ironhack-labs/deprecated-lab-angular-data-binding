import { Component, OnInit } from '@angular/core';
import foods from './foods';

class Food {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Food App';
  show = false;
  showFoods = true;
  searchTerms: string;
  foods: Object[];
  todaysFoods: Object[] = [];
  filteredFoods: Object[] = [];

  ngOnInit() {
    this.foods = foods;
    this.updateFilteredFoodList();
  }

  showForm(show: boolean) {
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  showFoodsList(showFoods: boolean) {
    if (this.showFoods === false) {
      this.showFoods = true;
    } else {
      this.showFoods = false;
    }
  }

  onNewFood(food) {
    this.todaysFoods.push(food);
  }

  handleNewFood(food) {
    this.foods.push(food);
    this.updateFilteredFoodList();
  }

  updateFilteredFoodList() {
    this.filteredFoods = this.foods.filter((food:Food) => {
      return !this.searchTerms || food.name === this.searchTerms;
    })
  }

}
