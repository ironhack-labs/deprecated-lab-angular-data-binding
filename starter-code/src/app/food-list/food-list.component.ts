import { Component, OnInit } from '@angular/core';
import foods, {foodInterface} from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodArr: foodInterface[];
  pattern: string;
  form: Boolean;
  newFood: foodInterface;

  constructor() { }

  ngOnInit() {
    this.foodArr = foods;
    this.pattern = '';
    this.form = false;
    this.newFood = { name: '', calories: 0, image: '', quantity: 0 }
  }

  toogleForm() {
    return (this.form ? this.form = false: this.form = true);
  }

  addFoodItem() {
    const { name, calories, image, quantity } = this.newFood;
    if(name !== '' && image !== '') {
      this.foodArr.push(this.newFood);
      this.toogleForm();
      this.newFood = { name: '', calories: 0, image: '', quantity: 0 };
    }
  }
}
