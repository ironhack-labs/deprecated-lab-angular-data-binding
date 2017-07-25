import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  constructor() {
    this.foods = foods;
    }

  ngOnInit() {
    this.foods = foods;
  }

}


  // addContact(){
  //   console.log("Add contact has been called");
  //   // add contact to contacts list
  //   // clear input
  //   this.contacts.push(this.newContact);
  //   this.newContact = {};
  // }
