import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-food-form',
  templateUrl: './new-food-form.component.html',
  styleUrls: ['./new-food-form.component.css']
})

export class NewFoodFormComponent implements OnInit {

  @Output() onNewFood = new EventEmitter<Object>();

  newFood: Object = {};

  handleSubmitClick(){
    this.onNewFood.emit(this.newFood);
  }

  constructor() { }

  ngOnInit() {
  }


}
