import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-new-food-form',
  templateUrl: './new-food-form.component.html',
  styleUrls: ['./new-food-form.component.css']
})
export class NewFoodFormComponent implements OnInit {
  @Output() onAddFood = new EventEmitter<object>();
  newFoodName    : string = "Example";
  newFoodCalories: number = 250;
  newFoodImage   : string = "http://dhiglobal.com/wp-content/uploads/2016/07/placeholder.jpg";

  constructor() { }

  ngOnInit() {
  }



submitForm(myForm) {
  const newFood = {
    name: this.newFoodName,
    calories: this.newFoodCalories,
    image: this.newFoodImage,
    quantity: 0

  }

  console.log(myForm);

  this.onAddFood.emit(newFood);

  }






}
