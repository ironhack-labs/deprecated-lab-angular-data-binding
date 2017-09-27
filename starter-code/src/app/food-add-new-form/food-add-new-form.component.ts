import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-add-new-form',
  templateUrl: './food-add-new-form.component.html',
  styleUrls: ['./food-add-new-form.component.css']
})
export class FoodAddNewFormComponent implements OnInit {
  @Output() onNewFood = new EventEmitter<Object>();


  constructor() { }

  ngOnInit() {
  }
  handleSubmitClick(){
    
  }
}
