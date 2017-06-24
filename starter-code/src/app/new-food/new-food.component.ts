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
  //
  // addFood(name: HTMLInputElement, image:HTMLInputElement, calories: HTMLInputElement) {
  //   this.newFood = {
  //     name: name.value,
  //     image: image.value,
  //     calories: calories.value,
  //     quantity: 0
  //   }
  //   this.foods.push(this.newFood);
  //   name.value='';
  //   image.value='';
  //   calories.value= "1"
  // }

  submitForm(myForm) {
    this.newFood = {
      name: myForm.value.foodName,
      image: myForm.value.foodImage,
      calories: myForm.value.foodCalories,
      quantity: 0
    }
    this.foods.unshift(this.newFood);
    myForm.reset();
    this.toggle();
  }

  ngOnInit() {
  }

}
