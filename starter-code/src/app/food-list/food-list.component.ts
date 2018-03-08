import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  food: object = {};
  visible: boolean;

  showForm() {
    (this.visible) ? this.visible = false : this.visible = true;
  }

  addFood() {
    foods.push(this.food);
  }

  ngOnInit() {
    this.foods = foods;
  }

}