import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFoods: Object = {};
  edited = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm() {
    this.edited = !this.edited;
  }
  addFoods(){
    console.log("Add contact has been called");
    this.foods.push(this.newFoods);
    this.newFoods = {}
    this.edited = false;

  };

}


// export class ContactListComponent implements OnInit {
//   contacts: Object[];
//   newContact: Object = {};
//
//   constructor() { }
//
//   ngOnInit() {
//     this.contacts = contactList;
//   }
//
//   addContact(){
//     console.log("Add contact has been called");
//       this.contacts.push(this.newContact);
//       this.newContact = {}
//   }
// }
