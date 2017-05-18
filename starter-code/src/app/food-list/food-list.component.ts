import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object>;
  isVisible: string;
  constructor() {
    this.isVisible="";
    this.foodList = [
      {
      name: 'Pizza',
      calories: 300,
      img: 'https://eatpizzafresca.com/images/pepperoni_pizza.jpg'
      }, {
      name: 'Potatoes',
      calories: 100,
      img: 'http://images.scrippsnetworks.com/up/tp/Scripps_-_Food_Category_Prod/64/647/0227360_630x355.jpg'
      }, {
      name: 'Onion',
      calories: 1,
      img: 'http://dreamicus.com/data/onion/onion-01.jpg'
      }
    ];
  }

  add(name, calories, url, form){
    this.foodList.push(
      {
        name: name.value,
        calories: calories.value,
        img: url.value
      }
    );
    this.changeVisibility(form);
  }

  changeVisibility(form){

    if (form.style.display == 'block')
      {form.style.display = 'none'}
    else {form.style.display = 'block'}
  }

  ngOnInit() {
  }

}
