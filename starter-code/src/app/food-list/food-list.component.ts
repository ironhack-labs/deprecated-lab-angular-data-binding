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
  showForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  onAddNewClick() {
    // show and hidde the form
    if (this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

  addFood() {

    // add contact to contacts list
    this.foods.push(this.newFood);
    // clear inputs
    this.newFood = {};
    this.showForm = false;

  }


  // addContact($event) {
  //   console.log("Add contact has been called");
  //   console.log(this.newContact);

  //   // add contact to contacts list
  //   this.contacts.push(this.newContact);
  //   // clear inputs
  //   this.newContact = {};
  // }

}
