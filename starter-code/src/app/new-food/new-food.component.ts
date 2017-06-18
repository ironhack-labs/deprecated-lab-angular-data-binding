import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  foods = foods;
  visible: boolean;
  displayText: string;
  newFood: Object;

  constructor() {
    this.visible = false;
    this.displayText = 'hide-class'
  }

  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

  addFood(name: HTMLInputElement, image:HTMLInputElement, calories: HTMLInputElement) {
    this.newFood = {
      name: name.value,
      image: image.value,
      calories: calories.value
    }
    this.foods.push(this.newFood);
    name.value='';
    image.value='';
    calories.value=''
  }

  ngOnInit() {
  }

}
