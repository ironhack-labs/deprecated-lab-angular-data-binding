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
  newFood: Object = {};
  searchFood: string = "";
  htmlToAdd: string = "";
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

  addFood(){
    this.foods.push(this.newFood);
  }


}
