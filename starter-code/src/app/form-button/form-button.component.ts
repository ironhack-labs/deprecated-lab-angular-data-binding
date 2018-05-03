import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  foods: Object[];
  newFood: Object = {}

  showForm = false;
  

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(){
    this.foods.push(this.newFood) 
    this.newFood = {};
    this.showForm = false;

  }

  formBtn() {
    this.showForm = true; 
  }




}
