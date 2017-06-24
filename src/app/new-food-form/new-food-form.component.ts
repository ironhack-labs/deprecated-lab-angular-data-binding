import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-food-form',
  templateUrl: './new-food-form.component.html',
  styleUrls: ['./new-food-form.component.css']
})
export class NewFoodFormComponent implements OnInit {
  //onAddFood is a custom event we just invented
  @Output() onAddFood = new EventEmitter<Object>();
  newFoodName : string = "Example";
  newFoodCalories: number = 250;
  newFoodImage: string = "http://i.imgur.com/V3EjZBR.jpg"

  constructor() { }

  ngOnInit() {
  }

  submitForm(myform) {
    const newFood = {
        name: this.newFoodName,
        calories: this.newFoodCalories,
        image: this.newFoodImage
    };
    console.log(myform);

    this.onAddFood.emit(newFood);
  }

}
