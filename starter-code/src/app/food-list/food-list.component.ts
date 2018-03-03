import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any> = foods;
  search: string =""

  constructor() { }

  ngOnInit() {
    this.foods = foods;

  }

getFoods(){
  this.foods.filter((food) => {
    if (this.search === "") {
      return true;
    } else {
      food.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
    }
  })
}

}
