import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-addnewfood',
  templateUrl: './addnewfood.component.html',
  styleUrls: ['./addnewfood.component.css']
})
export class AddnewfoodComponent implements OnInit {
  foods: Object[];
  newFood: Object = {}
  show: boolean = true;
  ngOnInit() {
    this.foods = foods;
  }

  // addFood () {
  //   console.log('hi');
  //   this.foods.unshift(this.newFood);
  //   this.show = true;
  //   this.newFood = {};
  // }

  submitForm(addfood) {
    this.newFood = {
      name: addfood.newFoodname.value,
      calories: addfood.newFoodname.value,
      image: addfood.newFoodname.value
    }
    this.foods.unshift(this.newFood);
    this.show = true;
    this.newFood = {};
  }

  showForm() {
    this.show = !this.show;
  }

  constructor() { }


}
