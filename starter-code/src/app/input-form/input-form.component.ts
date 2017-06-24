import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../newFood';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {

  // InputFormComponent recives from the FoodListComponent the value for property "show"
  // when the user click the button Add New Food. That boolean value is meant to
  // display the form input. 
  @Input() show : boolean;
  
  // The InputFormComponent use an EvenEmitter component to send to the FoodListComponent
  // the values entered by the user in the form.
  // **** See the selector 'app-input-form' in food-list.component.html where is
  // the binding for both the Output and Input Methos
  @Output() newFood : EventEmitter<Food> = new EventEmitter<Food>();
  
  foodInput : Food;
  constructor() { }

  submitForm(myForm) : void{
    // using the value property of the myForm Object we create the foodInput property which
    // is passed to the parent component => FoodListComponent to be added to the array
    // of foods
    this.foodInput = new Food(myForm.value['name'], myForm.value['calories'], myForm.value['image'])
    //console.log(this.foodInput);
    this.newFood.emit(this.foodInput);

    // Once the user add the new food the submitForm function
    // change the value of the property "show" and hide the form input again.
    this.show = !this.show;
  }

  ngOnInit() {
  }
}
