import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: any = {name: '', calories: '',  image: '' };
  isFormSHowing = false;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showFoodForm(): void {

    if ( this.isFormSHowing === false){
      this.isFormSHowing = true;
    }else {
      this.isFormSHowing = false;
    }

  }

  AddnewFood() {
    const newFood = {name: this.newFood.name, calories: this.newFood.calories, image: this.newFood.image};

    console.log('Add food has been called');
    this.foods.push(newFood);

  }

}
