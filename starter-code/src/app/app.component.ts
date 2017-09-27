import { Component, OnInit } from '@angular/core';
import foods from './foods';

class Food{name:string}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Nutrition';
  formVisible: boolean = false;
  listVisible: boolean = true;
  searchTerm: string;
  foods: Object[];
  todaysFoods: Object[] = [];
  filteredFoods: Object[] = [];

  ngOnInit() {
    this.foods = foods;
    this.updateFilteredFoodList();
  }

  showForm(formVisible: boolean){
    this.formVisible = !this.formVisible;
  }

  showList(listVisible: boolean){
    this.listVisible = !this.listVisible;
  }

  handleNewTodayFood(food) {
    this.todaysFoods.push(food);
  }

  handleNewFood(food) {
    this.foods.push(food);
    this.formVisible = false;
    this.updateFilteredFoodList();
  }

  updateFilteredFoodList() {
    this.filteredFoods = this.foods.filter((food:Food)=>{
      return !this.searchTerm || food.name === this.searchTerm
    });
  }
}
