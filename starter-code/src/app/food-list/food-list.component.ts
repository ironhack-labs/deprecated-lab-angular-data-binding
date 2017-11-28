import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  // newContact = {
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   image: ""
  // };

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  // "Add New Food" Button
  addFood() {
    // add here
  }

}
