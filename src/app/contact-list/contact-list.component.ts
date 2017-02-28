import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }
  /*IT2*/
  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    /*newContact ={
      name: this.newContact.name,
      email: this.newContact.email,
      phoneNumber: this.newContact.phoneNumber

    }
    // clear inputs*/
  }
}
