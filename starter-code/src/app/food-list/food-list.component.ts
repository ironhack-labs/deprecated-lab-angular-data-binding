import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods:Object[];
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
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
